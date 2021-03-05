const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');

router
	.get('/', ticketsController.findAll)
	.get('/:id', ticketsController.findOne)
	.post('/', ticketsController.create)
	.put('/:id', ticketsController.update)
	.delete('/:id', ticketsController.delete);

module.exports = router;