const express = require('express')
const route = express.Router()

const moviesRouter = require('./moviesRouter')
const usersRouter = require('./usersRouter')
const citiesRouter = require('./citiesRouter')
const cinemasRouter = require('./cinemasRouter')
const ticketsRouter = require('./ticketsRouter')
const transactionsRouter = require('./transactionsRouter')

route.use('/movies', moviesRouter)
route.use('/users', usersRouter)
route.use('/cities', citiesRouter)
route.use('/cinemas', cinemasRouter)
route.use('/tickets', ticketsRouter)
route.use('/transactions', transactionsRouter)

module.exports = route
