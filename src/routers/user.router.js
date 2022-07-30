const express = require('express')

const users = require('../usercases/user.usercases')

const router = express.Router()

router.get('/', async (request, response)=>{
    try {
        const allUser = await users.getAll()
        response.json({
            ok: true,
            allUser: allUser
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message || 'unknow'
        })
    }
})


router.get('/:id', async (request, response)=>{
    try {
        const getUser = await users.getById(request.params.id)
        response.json({
            ok: true,
            getUser: getUser
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message || 'unknow'
        })
    }
})


router.post('/', async (request, response)=>{
    try {
        const createdUser = await users.createdUser(request.body)
        response.json({
            ok: true,
            createdUser: createdUser
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message || 'unknow'
        })
    }
})

router.delete('/:id', async(request, response)=>{
    try {
        const deletedUser = await users.deleteById(request.params.id)
        response.json({
            ok: true,
            deletedUser: deletedUser
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message || 'unknow'
        })
    }
})

module.exports = router