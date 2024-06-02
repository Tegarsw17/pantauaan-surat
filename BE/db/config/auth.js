const dotenv = require('dotenv')

dotenv.config({path: `.env.production`}) 

module.exports = {
    secret: process.env.APP_KEY,
}