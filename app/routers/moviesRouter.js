const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')

router
  .get('/', moviesController.findAll)
  .get('/realesed', moviesController.findAllRealesed)
  .get('/:id', moviesController.findOne)
  .post('/', moviesController.create)
  .put('/:id', moviesController.update)
  .delete('/:id', moviesController.delete)

module.exports = router
