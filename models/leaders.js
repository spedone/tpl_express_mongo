const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    designation: {
        type: String
    },
    abbr: {
        type: String
    },
    description: {
        type: String
    },
    featured: {
        type: Boolean
    }
}, {
    timestamps: true
});