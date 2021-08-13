const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    type: {
        type: String,
        trim: true
    },
    content: {
        type: String
    },
    rating: {
        type: Number,
        default: 3
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;