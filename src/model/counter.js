const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");

const schema = new Schema({
    _id: Number,
    seq: Number
});

exports.POST_COUNTER_NAME = 1;
exports.useCounter = async (name) => {
    if(!name) {
        console.log("Error: counter's name cannot be empty!")
        return 0;
    }
    let Model = mongoose.model("Counter", schema);
    let counter = await Model.findById(name);
    console.log(counter)
    if (counter) {
        let seq = ++counter.seq;
        counter.update();
        return seq;
    }
    let doc = Model();
    doc._id = name;
    doc.seq = 1;
    doc.save().then((result) => {
        
    }).catch((err) => {

    });
    return 1;
}