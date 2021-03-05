require('dotenv').config();

// Port
const port = process.env.PORT;

// Package
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Router
const moviesRouter = require('./app/routers/moviesRouter');
const usersRouter = require('./app/routers/usersRouter');
const citiesRouter = require('./app/routers/citiesRouter');
const cinemasRouter = require('./app/routers/cinemasRouter');
const ticketsRouter = require('./app/routers/ticketsRouter');
const transactionsRouter = require('./app/routers/transactionsRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cors());
app.use(morgan('dev'));

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/cities', citiesRouter);
app.use('/cinemas', cinemasRouter);
app.use('/tickets', ticketsRouter);
app.use('/transactions', transactionsRouter);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});