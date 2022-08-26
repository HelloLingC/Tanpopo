const express = require("express");
const mongoose  = require("mongoose");
const router = express.Router();
const post = require("../model/post");
const md = require("markdown-it")();

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const p = await post.findPostById(id);
    const content = md.render(p.content);
    res.render("post", {title: p.title, post: p, content: content});
});

router.post("/create", (req, res) => {
    if(!req.session.userinfo) {
        res.send("Permission denied");
        return;
    }
    const Model = mongoose.model("Post", post.schema);
    const postDoc = new Model();
    postDoc.title = req.body.title;
    postDoc.content = req.body.content;
    postDoc.createdTime = new Date(Date.now());
    postDoc.lastUpdatedTime = new Date(Date.now());
    postDoc.viewNum = 0;
    postDoc.likeNum = 0;
    postDoc.isHidden = false;
    postDoc.save().then(saveDoc => {
        if(saveDoc) {
            res.send("200");
        } else {
            res.send("101");
        }
    });
});

router.post("/update", (req, res) => {
    if(!req.session.userinfo) {
        res.send("Permission denied");
        return;
    }
    const postDoc = mongoose.model("Post", post.schema)();
    
});

module.exports = router;