const express = require('express')
const app = express()
const {userRouter } = require('./app/routers')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use('/v1', userRouter)
// app.use('/v1', itemRouter)
// app.use('/v1', cartRouter)
// app.use('/v1', orderRouter)
// app.use('/v1', imageRouter)


module.exports = app