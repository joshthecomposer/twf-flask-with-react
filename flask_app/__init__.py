from flask import Flask
from os import environ
from flask_cors import CORS

application = Flask(__name__, static_folder="./client/dist", static_url_path="/")
application.secret_key = environ.get('SECRET_KEY')
application.config["DB_HOST"] = environ.get("DB_HOST")
application.config["DB_USER"] = environ.get("DB_USER")
application.config["DB_PASS"] = environ.get("DB_PASS")
application.config["DB_PORT"] = environ.get("DB_PORT")
CORS(application)