const mongo = require("mongoose");

const ruleSchema = new mongo.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    content: {
        type: String,
        required: [true, "Rule content is required!"]
    },
    killer: {
        type: Boolean,
        required: [true, "Killer or not must be specified!"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = {
    ruleSchema
}