const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');

router
	.get('/', citiesController.findAll)
	.get('/:id', citiesController.findOne)
	.post('/', citiesController.create)
	.put('/:id', citiesController.update)
	.delete('/:id', citiesController.delete);

module.exports = router;