const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    baker: { type: String, default: "" },
    image: { type: String, default: "" },
    ratingTotal: {type: Number, default: 0},
    reviews: [{
        rating: { type: Number, default: 0 },
        comments: { type: String, default: "" },
    }]
}, { timestamps: true })

const Cake = mongoose.model('Cake', CakeSchema);