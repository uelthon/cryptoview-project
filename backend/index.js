require('dotenv').config()
const express = require('express')
require('express-async-errors')
const cors = require('cors')
const coinsRouter = require('./controllers/coins')
const coinRouter = require('./controllers/coin')
const { requestLogger, unknownEndpoint, errorHandler } = require('./utils/middle')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))
app.use(requestLogger)

app.use('/api/coins', coinsRouter)
app.use('/api/coin', coinRouter)

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html') // eslint-disable-line
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`serve connected on port ${PORT}`)
})
