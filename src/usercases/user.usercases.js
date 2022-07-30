const bcrypt = require('bcrypt')
const createdError = require('http-errors')

const jwt = require('../lib/jwt.lib')

const User = require('../models/user.model')


async function login(email, password){
    const userFound = await User.findOne({email})
    if(!userFound){
        throw new createdError(401, 'Invalid data')
    }

    const isValidPassword = await bcrypt.compare(password, userFound.password)
    if(!isValidPassword){
        throw new createdError(401, 'Invalid data')
    }

    //Expedir token
    return jwt.sign({id: userFound._id})
}

async function createdUser(userData){

    const userFound = await User.findOne({email: userData.email})
    if(userFound){
        throw new createdError(432, 'User already exists')
    }

    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash
    return User.create(userData)
}

function deleteById(id){
    return User.findByIdAndDelete(id)
}

function getAll(){
    return User.find()
}

function getById(id){
    return User.findById(id)
}

module.exports = {
    createdUser,
    deleteById,
    getAll,
    getById,
    login
}