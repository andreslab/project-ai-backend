const mongoose = require('mongoose');

const TechnlogySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Technology is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    type: {
        type: String,
        required: [true, 'Type date is required']
    },
    objects: {
        type: ["String"],
        required: [true, "Type date is required"]
    }
})

const Technology = mongoose.model('Technology', TechnlogySchema);

module.exports = Technology;