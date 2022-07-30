const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match:/^.*@.*\..*$/,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        minlength: 5
    }
})

module.exports = mongoose.model('users', userSchema)