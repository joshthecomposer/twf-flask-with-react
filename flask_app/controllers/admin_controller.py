from flask import jsonify, send_from_directory, render_template, session, redirect, request, flash
from flask_app import application as app
from flask_app.models.admin import Admin
from flask_app.models.blog import Blog
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route("/admin/reg", methods=["GET"])
def reg():
    if (not Admin.has_tokens()):
        return redirect("/admin/login")
    return render_template("reg.html")

@app.route("/admin/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    if request.method == "POST":
        data = {
            "email":request.form["email"],
            "password":request.form["password"]
        }
        admin_exists = Admin.get_one_by_email(data)
        print(admin_exists)
        if not admin_exists:
            flash("Email/password invalid")
            return redirect("/admin/login")
        if not bcrypt.check_password_hash(admin_exists.password, data["password"]):
            flash("Email/password invalid")
            return redirect("/admin/login")
        session["admin"] = admin_exists.id
        return redirect("/admin/blogs")

@app.route("/admin/dashboard", methods=["GET"])
def dashboard():
    if (not Admin.session_check()):
        return redirect("/")
    return render_template("dashboard.html")

@app.route("/admin/tokens/generate")
def generate_token():
    if(not Admin.session_check()):
        return redirect("/")
    return render_template("token_form.html")

@app.route("/admin/create", methods=["POST"])
def create():
    data = {
        "token" : request.form["token"]
    }
    if (not Admin.validate_admin_token(data)):
        flash("Invalid token")
        return redirect("/admin/reg")
    data  = {
        "email" : request.form["email"]
    }
    if (Admin.email_exists(data)):
        flash("Email already exists")
        return redirect("/admin/reg")
    if (Admin.validate(request.form)):
        pw_hash = bcrypt.generate_password_hash(request.form["password"])
        data = {
            "first_name":request.form["first_name"],
            "last_name":request.form["last_name"],
            "email":request.form["email"],
            "password":pw_hash
        }
        Admin.create(data)
        data = {
            "token":request.form["token"]
        }
        Admin.destroy_token(data)
    return redirect("/admin/login")

@app.route("/admin/logout")
def logout():
    session.clear()
    return redirect("/")