const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    banned: {
        type: Boolean,
        required: false
    },

    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }

    
}, { timestamps: true })

const STORE = mongoose.model('Store', storeSchema);
module.exports = STORE; 