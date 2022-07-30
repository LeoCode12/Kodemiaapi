const express = require('express')
const createdError = require('http-errors')

const koders = require('../usercases/koders.usercases')

const authMiddleware = require('../middleware/auth.middleware')
const auth = require('../middleware/auth.middleware')

const router = express.Router()
// /koders

router.use(authMiddleware)
//GET: /Koders
//ruta padres
//Manejo de rutas -> routes
router.get('/', async (request, response)=>{
    try {
        const allKoders = await koders.getAll()

        response.json({
            ok: true,
            message: 'Koders All',
            allKoders: allKoders
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.get('/:id', async(request, response)=>{
    try {
        const koderById = await koders.getById(request.params.id)
        if(!koderById){
            // const error = new Error('Koder Not Found')
            // error.status = 404
            // throw error
            throw new createdError(404, 'Koder Not Found')
            
        }
        response.json({
            ok: true,
            koderById: koderById
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response)=>{
    try {
        const koderDeleted = await koders.deleteById(request.params.id)

        if(!koderDeleted){
            response.status(404)
            response.json({
                ok: false,
                message: 'koder Not Found'
            })
            
        }

        response.json({
            ok: true,
            koderDeleted: koderDeleted
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            error: error.message
        })
    }
})

router.post('/', async (request, response)=>{
    try {
        const newKoder = await koders.createKoder(request.body)
        response.json({
            ok: true,
            message: 'koder Created',
            newKoder: newKoder
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response)=>{
    try {
        const koderUpdate = await koders.updateById(request.params.id, request.body)
        response.json({
            ok: true,
            koderUpdate: koderUpdate
        }) 
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            error: error.message
        })
    }
})

module.exports = router