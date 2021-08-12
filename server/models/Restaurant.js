const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    logo: {
        type: String
    },
    location: {
        type: String
    },
    tags: {
        type: [String]
    },
    rating: {
        type: Number,
        default: 0
    },
    menu: [
        {
            type: Schema.Types.ObjectId,
            ref: 'MenuItem',
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        }
    ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;