require('dotenv').config()
const mongoose = require('mongoose')
//importamo el server.js
const server = require('./src/server')

const {  
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const urlMongoDB = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


mongoose.connect(urlMongoDB)
    .then(()=>{
        console.log('DB Connection Success');
        server.listen(8080, ()=>{
            console.log('Server Listening');
        })
    })
    .catch((error)=>{
        console.error('DB connection error: ', error);
    })
