require('dotenv').config()

// Port
const port = process.env.PORT

// Package
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// Router
const router = require('./app/routers')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use(cors())
app.use(morgan('dev'))

app.use('/v1', router);

app.use('*', (req, res, next) => {
  const err = new Error('Page not found')
  next(err)
})

app.use((err, req, res, next) => {
  res.status(404).send({
    status: false,
    message: err.message
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})