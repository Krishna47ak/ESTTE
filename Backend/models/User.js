const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    expertise: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: [String],
        required: true
    },
    property: [
        {
            img: {
                type: String
            },
            category: {
                type: String,
                required: true
            },
            name: {
                type: String,
                unique: true,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            bedrooms: {
                type: Number,
                required: true
            },
            bathrooms: {
                type: Number,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema)