const express = require('express')
const app = express()
const {userRouter, letterRouter, uploadRouter, approvalRouter } = require('./app/routers')
const bodyParser = require('body-parser')
const { cors, corsOptions } = require('./app/middlewares/cors')
const swaggerUi = require(`swagger-ui-express`)
const YAML = require('yamljs');
const swaggerDocument = YAML.load(`./swagger.yaml`);



app.use(cors(corsOptions))

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Origin: *",
        'Access-Control-Allow-Headers',
        'authorization, Origin, Content-Type, Accept'
    )

    next()
})

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use('/v1', userRouter)
app.use('/v1', letterRouter)
app.use('/v1', uploadRouter)
app.use('/v1', approvalRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// app.use('/v1', imageRouter)


module.exports = app