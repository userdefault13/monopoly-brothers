const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rent: {
        type: [Number],
        required: true,
    },
    houseCost: {
        type: Number,
        required: true,
    },
    hotelCost: {
        type: Number,
        required: true,
    },
    colorBox: {
        type: String,
        required: true,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
    houses: {
        type: Number,
        required: true,
        default: 0,
    },
    hasHotel: {
        type: Boolean,
        required: true,
        default: false,
    },
  // Add any other property-related fields as needed
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
