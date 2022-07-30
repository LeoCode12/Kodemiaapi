const mongoose = require('mongoose')

//Crear Esquema
const koderSchema = new mongoose.Schema({
    //reglas
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        max: 150,
        required: true
    },
    nationality: {
        type: String,
        required: false,
    },
    generationNumber: {
        type: Number,
        min: 1,
        required: true
    },
    hobbies: {
        type: [String],
        maxlength: 10
    },
    sex: {
        type: String,
        enum: ['m', 'f']
    },
    city: {
        type: String,
    }
})

// const Koder = mongoose.model('koders', koderSchema)
// module.exports = Koder
//exportamos el modelo
module.exports = mongoose.model('koders', koderSchema)