from flask_app.config.mysqlconnection import connectToMySQL

DB = "twfdb"

class Block:
    def __init__(self, data):
        self.id = data["id"]
        self.blog_id = data["blog_id"]
        self.text = data["text"]
        self._order = data["_order"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def save(cls, data):
        query = "INSERT INTO blocks (blog_id, text, _order) VALUES (%(blog_id)s,%(text)s,%(_order)s);"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = "UPDATE blocks SET text = %(text)s, _order = %(_order)s WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM blocks WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def delete_by_blog_id(cls,data):
        query = "DELETE FROM blocks WHERE blog_id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)
    
    @staticmethod
    def determine_order():
        query = "SELECT * FROM blocks ORDER BY _order LIMIT 1"
        result = connectToMySQL(DB).query_db(query)
        if len(result) > 0:
            return result[0]["_order"] + 10
        else:
            return 10
        
    @classmethod
    def find_by_blog_id(cls, data):
        query="SELECT * FROM blocks WHERE blog_id = %(blog_id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        if len(result) < 1:
            return []
        blocks = []
        for r in result:
            one_block=cls(r)
            blocks.append(one_block)
        return blocks
