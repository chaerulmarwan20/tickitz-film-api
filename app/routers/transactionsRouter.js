const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router
	.get('/', transactionsController.findAll)
	.get('/:id', transactionsController.findOne)
	.post('/', transactionsController.create)
	.put('/:id', transactionsController.update)
	.delete('/:id', transactionsController.delete);

module.exports = router;