const mongoose = require('mongoose');

const { Schema } = mongoose;

const PurchasedItem = require('./PurchasedItem');

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    cart: [PurchasedItem.schema]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;