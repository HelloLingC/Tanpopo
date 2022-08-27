var Schema = require("mongoose").Schema;
const mongoose  = require("mongoose");
const counter = require("./counter");

let postOptions = {
    title: "",
    content: "",
}

/*
 * @Return a promise
 */
exports.createPost = async (title, content) => {
    const postDoc = mongoose.model("Post", schema)();
    postDoc._id = await counter.useCounter(counter.POST_COUNTER_NAME);
    postDoc.title = title;
    postDoc.content = content;
    postDoc.createdTime = new Date(Date.now());
    postDoc.lastUpdatedTime = new Date(Date.now());
    postDoc.viewNum = 0;
    postDoc.likeNum = 0;
    postDoc.isHidden = false;
    return postDoc.save();
}

exports.findPostById = async (id) => {
    const model = mongoose.model("Post", schema)
    const post = await model.findById(id).exec();
    return post;
}

/* 
 * Get all of the posts limited by page number, sorted with desc
 * If page argument is undefined, this proc will return posts
 * without the limition
 * @Return a promise 
 */
exports.findPost = async (page) => {
    const query = mongoose.model("Post", schema).find();
    if(page) {
        query.withPage(page)
    }
    return await query
    .sort({createdTime: -1})
    .exec();
}

const schema = new Schema({
    _id: Number,
    title: String,
    content: String,
    emoji: { type: String, default: "dizzy" },
    picture: String,
    createdTime: Date,
    lastUpdatedTime: Date,
    category: String,
    tags: String,
    isHidden: {
        type: Boolean,
        default: false
    },
    viewNum: Number,
    likeNum: Number
}, {
    statics: {
        findWithPage(page) {

        },
    },
    query: {
        withPage(num) {
            return this.skip((num - 1) * 10).limit(10);
        }
    }
})