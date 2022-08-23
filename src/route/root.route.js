const express = require("express");
const serverConfig = require("../config/server.config");
const router = express.Router();
const mongoose  = require("mongoose");
// Post Model
const post = require("../model/post");

router.get("/", async (req, res) => {
    const posts = await post.findPost(1);
    if(posts) {
        res.render("index", { title: "鱼收藏家", posts: posts})
    } else {
        res.send("No Post Data")
    }
});

router.get("/admin", async (req, res) => {
    if (req.session.userinfo) {
        res.render("login/admin", {posts: await post.findPost()});
    } else {
        res.render("restriction", { info: "Access restriction" });
    }
});

router.get("/login", (req, res) => {
    if (req.session.userinfo) {
        res.render("restriction", { info: "You have been logged in." })
        return;
    } 
    res.render("login/login");
});

router.post("/login", (req, res) => {
    if (typeof(req.body.username) == "undefined") {
        res.send("No data")
    } else {
        const username = process.env.ADMIN_USERNAME || serverConfig.ADMIN_USERNAME;
        const password = process.env.ADMIN_PASSWORD || serverConfig.ADMIN_PASSWORD;
        if (req.body.username === username && req.body.password === password) {
            req.session.userinfo = username;
            res.redirect("admin");
        } else {
            // Todo: 
            res.render("restriction", { info: "Failed to login! You've been banned from loging in this server forever." });
        }
    }
});

router.get("/home", async (req, res) => {
    const posts = await post.findPost(1);
    if(posts) {
        res.render("page/home", { title: "鱼收藏家", posts: posts})
    } else {
        res.send("No Post Data")
    }
})

router.get("/about", (req, res) => {
    res.render("page/about");
});

module.exports = router;