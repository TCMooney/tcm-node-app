const express = require('express')
const morgan = require('morgan')
const app = express()

const postRoutes = require('./routes/postRoutes')

app.use(morgan('dev'))

app.use(postRoutes)

const port = 4000

app.listen(port, () => console.log(`API is listening on port ${port}`))