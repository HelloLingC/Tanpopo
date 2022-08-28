const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// Post Model
const post = require("../model/post");

const PARTIAL_CONTENT_HEADER = "Partial-Content";
router.get("/", async (req, res) => {
    const posts = await post.findPost(1);
    if (!posts) {
        res.send("Error: Cannot get posts")
        return;
    }
    if (req.get(PARTIAL_CONTENT_HEADER) === "1") {
        res.render("page/home", {
            title: "鱼收藏家",
            posts: posts
        })
        return;
    }
    res.render("index", {
        title: "鱼收藏家",
        posts: posts
    })

});

router.get("/admin", async (req, res) => {
    if (req.session.userinfo) {
        res.render("login/admin", {
            posts: await post.findPost()
        });
    } else {
        res.render("restriction", {
            info: "Access restriction"
        });
    }
});

router.get("/login", (req, res) => {
    if (req.session.userinfo) {
        res.render("restriction", {
            info: "You have been logged in."
        })
        return;
    }
    res.render("login/login");
});

router.post("/login", (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.send("No data")
    } else {
        const username = process.env.ADMIN_USERNAME;
        const password = process.env.ADMIN_PASSWORD;
        if (req.body.username === username && req.body.password === password) {
            req.session.userinfo = username;
            res.redirect("admin");
        } else {
            // Todo: 
            res.render("restriction", {
                info: "Failed to login! You've been banned from loging in this server forever."
            });
        }
    }
});

router.get("/about", (req, res) => {
    if(req.get(PARTIAL_CONTENT_HEADER) == "1") {
        res.render("page/about");
    } else {
        res.send("Developing");
    }
});

module.exports = router;