from flask import jsonify, send_from_directory, render_template, session, redirect, request, flash
from flask_app import application as app
from flask_app.models.admin import Admin
from flask_app.models.blog import Blog

@app.route("/admin/blogs", methods=["GET"])
def blog():
    if (not Admin.session_check()):
        return redirect("/")
    return render_template("blog.html")

@app.route("/admin/blogs/all", methods=["GET"])
def all_blogs():
    if (not Admin.session_check()):
        return redirect("/")
    all_blogs = Blog.get_all()
    return render_template("all_blogs.html", all_blogs=all_blogs)

@app.route("/admin/blogs/create", methods=["POST"])
def create_blog():
    if(not Admin.session_check()):
        return redirect("/")
    data = {
        "admin_id" : session["admin"],
        "title" : request.form["title"],
        "author" : request.form["author"],
        "is_released" : False
    }
    id = str(Blog.create(data))
    return redirect("/admin/blogs/"+ id)

@app.route("/admin/blogs/<int:id>", methods=["GET"])
def blog_view_one(id):
    if(not Admin.session_check()):
        return redirect("/")
    one_blog = Blog.by_id(data={"id":id})
    return render_template("/view_blog.html", b=one_blog)

@app.route("/admin/blogs/<int:id>/delete", methods=["POST"])
def blog_delete(id):
    if(not Admin.session_check()):
        return redirect("/")
    
    Blog.destroy(data={"id":id})
    return redirect("/admin/blogs/all")

@app.route("/admin/blogs<int:id>/update", methods=["POST"])
def blog_update(id):
    if(not Admin.session_check()):
        return redirect("/")
    pass


@app.route("/admin/blogs/release", methods=["POST"])
def release_blog():
    data={"id":request.form["id"]}
    Blog.release(data)
    return redirect("/admin/blogs/"+data["id"])
#TODO: Add a method to fetch only released blogs for the front end.
