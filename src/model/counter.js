var Schema = require("mongoose").Schema;
const mongoose  = require("mongoose");

module.useCounter = async (name) => {
    let counter = await mongoose.model("Counter", this.schema).findById(name);
    let seq = counter.seq;
    counter.seq += 1;
    counter.update()
    return seq;
}

module.schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    seq: Number
});