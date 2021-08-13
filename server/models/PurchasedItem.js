const mongoose = require('mongoose');

const { Schema } = mongoose;

const purchasedItemSchema = new Schema({
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    addon: {
        type: String,
        trim: true,
        default: 'no addons'
    },
    menuItem: 
        {
            type: Schema.Types.ObjectId,
            ref: 'MenuItem',
        }
});

const PurchasedItem = mongoose.model('PurchasedItem', purchasedItemSchema);

module.exports = PurchasedItem;