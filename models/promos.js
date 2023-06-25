const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    label: {
        type: String
    },
    price: {
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