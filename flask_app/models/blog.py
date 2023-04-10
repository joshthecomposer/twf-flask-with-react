from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.block import Block

DB = "twfdb"

class Blog:
    def __init__(self, data):
        self.id = data["id"]
        self.admin_id = data["admin_id"]
        self.title = data["title"]
        self.author = data["author"]
        self.is_released = data["is_released"]
        self.created_at  = data["created_at"]
        self.updated_at = data["updated_at"]
        self.blocks = []

    @classmethod
    def create(cls, data):
        query = "INSERT INTO blogs (admin_id, title, author, is_released) VALUES (%(admin_id)s,%(title)s,%(author)s, %(is_released)s);"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def by_id(cls, data):
        query = "SELECT * FROM blogs LEFT JOIN blocks ON blocks.blog_id = blogs.id WHERE blogs.id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        one_blog = cls(result[0])
        for r in result:
            if r["blocks.id"] == None:
                continue
            data = {
                "id" : r["blocks.id"],
                "blog_id" : r["blog_id"],
                "text" : r["text"],
                "_order" : r["_order"],
                "created_at" : r["blocks.created_at"],
                "updated_at" : r["blocks.updated_at"]
            }
            one_blog.blocks.append(Block(data))
        return one_blog

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM blogs;"
        result = connectToMySQL(DB).query_db(query)
        if len(result) < 1:
            return []
        blogs = []
        for r in result:
            one = cls(r)
            blogs.append(one)
        return blogs

    @classmethod
    def get_all_released(cls):
        query = "SELECT * FROM blogs WHERE is_released = 1 ORDER BY created_at DESC;"
        result = connectToMySQL(DB).query_db(query)
        if len(result) < 1:
            return []
        blogs = []
        for r in result:
            one_blog = cls(r)
            data={"blog_id":r["id"]}
            one_blog.blocks = Block.find_by_blog_id(data)
            blogs.append(one_blog)
        return blogs
    @classmethod
    def destroy(cls, data):
        c = {"id":data["id"]}
        Block.delete_by_blog_id(c)
        query = "DELETE FROM blogs WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = "UPDATE blogs SET admin_id = %(admin_id)s, title = %(title)s, author = %(author)s WHERE id = %(id)s"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def release(cls, data):
        query = "UPDATE blogs SET is_released = 1 WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)