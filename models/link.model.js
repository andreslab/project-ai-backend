const mongoose = require('mongoose')

const LinkSchema = mongoose.Schema(
    {
        url: {
            type: String,
            required: [true, 'Url is required']
        }
    }
)

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;