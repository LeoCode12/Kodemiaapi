const express = require('express')
const createdError = require('http-errors')

const User = require('../usercases/user.usercases')

const router = express.Router()


router.post('/login', async (request, response)=>{
    try {
        const {email, password} = request.body

        if(!email) throw new createdError(400, 'Email is required')
        if (!password) throw new createdError(400, 'Password is required')

        const token = await User.login(email, password)
        
        response.json({
            ok: true,
            token
        })

    } catch (error) {
        response.status(error.status, 500)
        response.json({
            ok: false,
            error: error.message
        })
    }
})


module.exports = router