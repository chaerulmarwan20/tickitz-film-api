const moviesModel = require('../models/moviesModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  const keyword = req.query.keyword ? req.query.keyword : null
  moviesModel.getAllMovies(queryPage, queryPerPage, keyword)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Movies not found')
      }
      helper.printPaginate(res, 200, 'Find all movies successfully', totalData, totalPage, result, page, perPage)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.findAllRealesed = (req, res) => {
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  moviesModel.getMoviesRealesed(queryPage, queryPerPage)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Movies realesed not found')
      }
      helper.printPaginate(res, 200, 'Find all movies realesed successfully', totalData, totalPage, result, page, perPage)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  const checkId = /^[0-9]+$/
  if (id.match(checkId) == null) {
    helper.printError(res, 400, 'Provide a valid id!')
    return
  }

  moviesModel.getMoviesById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Cannot find one movies with id = ${id}`)
      }
      helper.printSuccess(res, 200, 'Find one movies successfully', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.create = (req, res) => {
  const { title, genre, duration, director, cast, synopsis, rating, realesed } = req.body

  if (!title || !genre || !duration || !director || !cast || !synopsis || !rating) {
    helper.printError(res, 400, 'Content cannot be empty')
    return
  }

  const data = {
    title,
    image: 'default.jpg',
    genre,
    duration,
    director,
    cast,
    synopsis,
    rating,
    realesed: realesed || false,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  moviesModel.createMovies(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error('Error creating movies')
      }
      helper.printSuccess(res, 200, 'New movies has been created', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { title, genre, duration, director, cast, synopsis, rating, realesed } = req.body

  if (!title || !genre || !duration || !director || !cast || !synopsis || !rating) {
    helper.printError(res, 400, 'Content cannot be empty')
    return
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, 'Provide a valid id!')
    return
  }

  const data = {
    title,
    image: 'default.jpg',
    genre,
    duration,
    director,
    cast,
    synopsis,
    rating,
    realesed: realesed || false
  }

  moviesModel.updateMovies(id, data)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Cannot update movies with id = ${id}`)
      }
      helper.printSuccess(res, 200, 'Movies has been updated', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  const checkId = /^[0-9]+$/
  if (id.match(checkId) == null) {
    helper.printError(res, 400, 'Provide a valid id!')
    return
  }

  moviesModel.deleteMovies(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete movies with id = ${id}`)
      }
      helper.printSuccess(res, 200, 'Movies has been deleted', {})
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}
