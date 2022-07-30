//importamos el Modelo
const createError = require('http-errors')
const Koder = require('../models/koders.model')

//Casos de uso
function getAll(){
    return Koder.find()
}

function getById(id){
    return Koder.findById(id)
}

function createKoder(koderData){
    const newKoder = new Koder(koderData)

    const error = newKoder.validateSync()

    if(error){
        console.error('error:', error);
        throw new createError(400, 'validation failed')
    }
    return newKoder.save()
    // return Koder.create(koderData)
}

function deleteById (id){
    return Koder.findOneAndDelete(id)
}

function updateById(id, newKoderData){
    return Koder.findByIdAndUpdate(id, newKoderData)
}

//exportacion por objecto
module.exports = {
    getAll,
    getById,
    createKoder,
    deleteById,
    updateById
}