const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const counter = require("../model/counter");
const post = require("../model/post");
const md = require("markdown-it")();

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const p = await post.findPostById(id);
    const content = md.render(p.content);
    res.render("post", {
        title: p.title,
        post: p,
        content: content
    });
});

router.post("/create", async (req, res) => {
    if (!req.session.userinfo) {
        res.send("Permission denied");
        return;
    }
    savedDoc = await post.createPost(req.body.title, req.body.content)
    if (savedDoc) {
        res.send("200");
    } else {
        res.send("500");
    }
});

router.post("/update", (req, res) => {
    if (!req.session.userinfo) {
        res.send("Permission denied");
        return;
    }
    const postDoc = mongoose.model("Post", post.schema)();

});

module.exports = router;