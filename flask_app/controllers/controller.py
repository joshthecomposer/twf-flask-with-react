from flask import jsonify, send_from_directory, render_template, json
from flask_app import application as app
from flask_app.models.blog import Blog
import feedparser
import json

EPISODES = feedparser.parse("https://feeds.redcircle.com/7404a6c6-18b8-4f30-a819-468fb013bff2?fbclid=IwAR2jIZ2aJUjpEZL7tOHNtHr8R6OhgfKSQl7Op5OT8MwAuLT2dCxL38y1uqs")

@app.route('/')
@app.route('/about')
def index():
    return app.send_static_file('index.html')

# Path for all the static files (compiled JS/CSS, etc.)
@app.route("/<path:path>")
def directory(path):
    return send_from_directory('./client/public', path)

@app.route("/api/episodes/latest", methods=["GET"])
def latest():
    e = EPISODES.entries[0]
    return jsonify(e)

@app.route("/api/episodes", methods = ["GET"])
def all_episodes():
    e = EPISODES.entries
    result = []
    for oneEp in e:
        oneEp = {
            "title":oneEp.title,
            "image" :{"href":oneEp.image.href},
            "links":[{"href":oneEp.links[0].href}],
            "summary":oneEp.summary
        }
        result.append(oneEp)
    return jsonify(result)

@app.route("/api/blogs", methods=["GET"])
def api_all_blogs():
    all_blogs = Blog.get_all_released()
    d = []
    for b in all_blogs:
        bd = {}
        bd["title"] = b.title
        bd["author"] = b.author
        bd["updated_at"] = b.updated_at
        d.append(bd)
        bd["blocks"] = []
        for c in b.blocks:
            cd = {}
            cd["text"] = c.text
            bd["blocks"].append(cd)
    return jsonify(d)