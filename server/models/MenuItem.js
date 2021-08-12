const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.50
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
