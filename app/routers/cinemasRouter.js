const express = require('express')
const router = express.Router()
const cinemasController = require('../controllers/cinemasController')

router
  .get('/', cinemasController.findAll)
  .get('/:id', cinemasController.findOne)
  .post('/', cinemasController.create)
  .put('/:id', cinemasController.update)
  .delete('/:id', cinemasController.delete)

module.exports = router
