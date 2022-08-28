const path = require("path");
const express = require("express");
require("dotenv").config();
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const ejs = require("ejs");
const favicon = require("serve-favicon");
const rootRouter = require("./route/root.route");
const postRouter = require("./route/post.route");

var app = express();
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.set("views", "./src/view");
app.engine(".html", ejs.renderFile)
app.set("view engine", "html");
app.use(express.static("./src/public", { etag: false }))

// No 304 Status Code
app.set("etag", false);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(helmet.hsts())
app.use(helmet.hidePoweredBy())
app.use(helmet.xssFilter())
app.use(helmet.frameguard())

// Here should not be app.set()!!! I dont know why actually
app.use("/", rootRouter);
app.use("/post/", postRouter);
app.use((req, res) => {
    res.render("restriction", { info: "404 Page Not Found: " + process.env.HOST_NAME + req.originalUrl });
});

app.listen(process.env.PORT, () => {
    console.log(`App start running at port ${process.env.PORT}`);
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connect to Mongodb successfully")
})
.catch((err) => {
    console.log("Connection to Mongodb error: " + err)
})