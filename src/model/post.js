var Schema = require("mongoose").Schema;
const mongoose  = require("mongoose");

exports.name = "Post";

exports.findPostById = async (id) => {
    const model = mongoose.model(this.name, this.schema)
    const post = await model.findById(id).exec();
    return post;
}

/* Get all of the posts limited by page number, sorted with desc
 * If page argument is undifined, return posts without limition
 * Return a promise 
*/
exports.findPost = async (page) => {
    const query = mongoose.model(this.name, this.schema).find();
    if(page) {
        query.withPage(page)
    }
    return await query
    .sort({createdTime: -1})
    .exec();
}

exports.schema = new Schema({
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