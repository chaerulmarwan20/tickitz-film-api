const ticketsModel = require('../models/ticketsModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const keyword = req.query.keyword
  if (keyword) {
    ticketsModel.searchMoviesTickets(`%${keyword}%`)
      .then((result) => {
        if (result < 1) {
          throw new Error('Tickets movies not available')
        }
        helper.print(res, 200, 'Tickets movies available', result)
      })
      .catch((err) => {
        helper.print(res, 500, err.message, {})
      })
  } else {
    ticketsModel.getAllTickets()
      .then((result) => {
        if (result < 1) {
          throw new Error('Tickets not found')
        }
        helper.print(res, 200, 'Find all tickets successfully', result)
      })
      .catch((err) => {
        helper.print(res, 500, err.message, {})
      })
  }
}

exports.findOne = (req, res) => {
  const id = req.params.id

  const checkId = /^[0-9]+$/
  if (id.match(checkId) == null) {
    res.status(400).send({
      status: false,
      message: 'Provide an id!'
    })
    return
  }

  ticketsModel.getTicketsById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Error find one tickets with id = ${id}`)
      }
      helper.print(res, 200, 'Find one tickets successfully', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.create = async (req, res) => {
  const { day, row, seat, price, qty, idMovie, idCinema } = req.body

  if (!day || !row || !seat || !price || !qty || !idMovie || !idCinema) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  }

  let titleMovie
  try {
    const getTitle = await ticketsModel.getMovieTitle(idMovie)
    const getCinema = await ticketsModel.getCinema(idCinema)
    if (getTitle < 1 || getCinema < 1) {
      res.status(400).send({
        status: false,
        message: 'Provide an id movie and cinema!'
      })
      return
    }
    titleMovie = getTitle[0].title
  } catch (err) {
    helper.print(res, 500, err.message, {})
  }

  const data = {
    movieTitle: titleMovie,
    day,
    row,
    seat,
    price,
    qty,
    idMovie,
    idCinema,
    date: new Date(),
    time: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  ticketsModel.createTickets(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error('Error creating movies')
      }
      helper.print(res, 200, 'New movies has been created', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { day, row, seat, price, qty, idMovie, idCinema } = req.body

  if (!day || !row || !seat || !price || !qty || !idMovie || !idCinema) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  } else if (id.match(checkId) == null) {
    res.status(400).send({
      status: false,
      message: 'Provide an id!'
    })
    return
  }

  let titleMovie
  try {
    const getTitle = await ticketsModel.getMovieTitle(idMovie)
    const getCinema = await ticketsModel.getCinema(idCinema)
    if (getTitle < 1 || getCinema < 1) {
      res.status(400).send({
        status: false,
        message: 'Provide an id movie and cinema!'
      })
      return
    }
    titleMovie = getTitle[0].title
  } catch (err) {
    helper.print(res, 500, err.message, {})
  }

  const data = {
    movieTitle: titleMovie,
    day,
    row,
    seat,
    price,
    qty,
    idMovie,
    idCinema
  }

  ticketsModel.updateTickets(id, data)
    .then((result) => {
      if (result === 0) {
        throw new Error(`Cannot update tickets with id = ${id}`)
      } else {
        helper.print(res, 200, 'Tickets has been updated', result)
      }
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  const checkId = /^[0-9]+$/
  if (id.match(checkId) == null) {
    res.status(400).send({
      status: false,
      message: 'Provide an id!'
    })
    return
  }

  ticketsModel.deleteTickets(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete tickets with id = ${id}`)
      }
      helper.print(res, 200, 'Tickets has been deleted', {})
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.sort = (req, res) => {
  ticketsModel.sortByDate()
    .then((result) => {
      if (result < 1) {
        throw new Error('Tickets not found')
      }
      helper.print(res, 200, 'Sort by date tickets successfully', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}
