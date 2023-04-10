from flask import jsonify, send_from_directory, render_template, session, redirect, request, flash
from flask_app import application as app
from flask_app.models.block import Block
from flask_app.models.admin import Admin

@app.route("/admin/blocks/create", methods=["POST"])
def create_block():
    if (not Admin.session_check()):
        return redirect("/")
    data = {
        "blog_id":request.form["blog_id"],
        "text":request.form["text"],
        "_order":Block.determine_order()
    }
    Block.save(data)
    return redirect("/admin/blogs/"+ data["blog_id"])

@app.route("/admin/blocks/<int:id>/delete", methods=["POST"])
def delete_block(id):
    if (not Admin.session_check()):
        return redirect("/")
    Block.destroy(data={"id":id})
    return redirect("/admin/blogs/"+ request.form["blog_id"])

@app.route("/admin/blocks/<int:id>/update", methods=["POST"])
def update_block(id):
    if (not Admin.session_check()):
        return redirect("/")
    data = {
        "id":id,
        "text": request.form["text"],
        "_order":request.form["_order"]
    }
    Block.update(data)
    return redirect("/admin/blogs/"+request.form["blog_id"])