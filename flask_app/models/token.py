from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import application as app

DB = "twfdb"

class Token:
    def __init__(self, data):
        self.id  = data["id"]
        self.token = data["token"]
        self.created_at = data["created_at"]
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO admin_tokens (token) VALUES (%(token)s);"
        return connectToMySQL(DB).query_db(query, data)
    
    @staticmethod
    def generate_token():
        # TODO: logic for token generation
        return app.config["SECRET_KEY"]