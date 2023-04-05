const express = require('express')
const app = express()
const {userRouter, letterRouter, uploadRouter } = require('./app/routers')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use('/v1', userRouter)
app.use('/v1', letterRouter)
app.use('/v1', uploadRouter)
// app.use('/v1', orderRouter)
// app.use('/v1', imageRouter)


module.exports = app