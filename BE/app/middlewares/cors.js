const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({path: `.env.${process.env.NODE_ENV}`})

let whitelist = [`http://localhost:${process.env.PORT}`]
let corsOptions = {
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['authorization', 'Content-Type', 'Accept'],
    origin: function(origin,callback) {
        if (whitelist.indexOf(origin) == -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}

module.exports = {
    cors,
    corsOptions
}