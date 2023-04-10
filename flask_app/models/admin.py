from flask_app.config.mysqlconnection import connectToMySQL
from flask import session, flash
from datetime import datetime as dt
from datetime import timedelta
import re

DB = "twfdb"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$")

class Admin:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def create(cls, data):
        query = "INSERT INTO admins (first_name, last_name, email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def email_exists(cls, data):
        query = "SELECT email FROM admins WHERE email = %(email)s"
        result = connectToMySQL(DB).query_db(query, data)
        return True if len(result) > 0 else False 

    @classmethod
    def get_one_by_email(cls, data):
        query = "SELECT * FROM admins WHERE email = %(email)s"
        result = connectToMySQL(DB).query_db(query, data)
        if len(result) < 1:
            return False
        admin = Admin(result[0])
        return admin

    @staticmethod
    def has_tokens():
        d = str(dt.now() + timedelta(days = 14)).split(".")[0]
        query = f'SELECT * FROM admin_tokens WHERE created_at < "{d}";'
        result = connectToMySQL(DB).query_db(query)
        return True if len(result) > 0 else False

    @staticmethod
    def destroy_token(data):
        query = "DELETE FROM admin_tokens WHERE token = %(token)s;"
        return connectToMySQL(DB).query_db(query, data)

    @staticmethod
    def session_check():
        if ('admin' in session):
            return True
        return False

    @staticmethod
    def validate_admin_token(data):
        is_valid = False
        d = dt.now() + timedelta(days = 14)
        query = "SELECT * FROM admin_tokens WHERE token = %(token)s;"
        result = connectToMySQL(DB).query_db(query, data)
        if (len(result)>0):
            if (result[0]["created_at"] < d):
                is_valid = True
        return is_valid
    
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data["first_name"]) < 2:
            flash("First name must be at least 2 characters")
            is_valid = False
        if not EMAIL_REGEX.match(data["email"]):
            flash("Invalid Email Format")
            is_valid = False
        if data["confirm"] != data["password"]:
            flash("Password input did not match")
            is_valid = False
        if len(data["password"]) < 8:
            flash("Password must be at least 8 characters")
        if len(data["password"]) >=8:
            if not PASSWORD_REGEX.match(data["password"]):
                flash('Password must contain one number, one uppercase letter, and one lowercase letter')
                is_valid = False
        return is_valid