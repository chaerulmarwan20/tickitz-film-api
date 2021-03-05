const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router
	.get('/', usersController.findAll)
	.get('/:id', usersController.findOne)
	.post('/', usersController.create)
	.put('/:id', usersController.update)
	.delete('/:id', usersController.delete);

module.exports = router;