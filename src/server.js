const express = require('express')
const cors = require('cors')


//importamos el router
const kodersRouter = require('./routers/koders.router')
const usersRouter = require('./routers/user.router')
const authRouter = require('./routers/auth.router')

const loggerMiddleware = require('./middleware/logger.middleware')

// function middlewareGlobal(request, response, next){
//     console.log('Tenemos una peticion')
//     request.user = 'Leo'
//     next()
// }


const app = express()
app.use(cors())
app.use(express.json())

app.use(loggerMiddleware)

// app.use(middlewareGlobal)

app.use('/koders', kodersRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (request, response)=>{
    response.json({
        ok: true,
        message: 'KodemiaAPIv1'
    })
})

//se exporta la definicion del servidor
module.exports = app