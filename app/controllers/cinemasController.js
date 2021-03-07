const cinemasModel = require('../models/cinemasModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const keyword = req.query.keyword ? req.query.keyword : null
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  cinemasModel.getAllCinemas(queryPage, queryPerPage, keyword)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Cinemas not found')
      }
      res.status(200).json({
        status: true,
        message: 'Find cinemas successfully',
        totalData,
        totalPage,
        data: result,
        currentPage: page,
        perPage
      })
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
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

  cinemasModel.getCinemasById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Error find one cinemas with id = ${id}`)
      }
      helper.print(res, 200, 'Find one cinemas successfully', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.create = async (req, res) => {
  const { name, address, idCity } = req.body

  if (!name || !address || !idCity) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  }

  try {
    const getCity = await cinemasModel.getCity(idCity)
    if (getCity < 1) {
      res.status(400).send({
        status: false,
        message: 'Provide an id city!'
      })
      return
    }
  } catch (err) {
    helper.print(res, 500, err.message, {})
  }

  const data = {
    name,
    address,
    idCity,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  cinemasModel.createCinemas(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error('Error creating cinemas')
      }
      helper.print(res, 200, 'New cinemas has been created', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { name, address, idCity } = req.body

  if (!name || !address || !idCity) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  } else if (id.match(checkId) == null) {
    res.status(400).send({
      message: 'Provide an id!'
    })
    return
  }

  try {
    const getCity = await cinemasModel.getCity(idCity)
    if (getCity < 1) {
      res.status(400).send({
        status: false,
        message: 'Provide an id city!'
      })
      return
    }
  } catch (err) {
    helper.print(res, 500, err.message, {})
  }

  const data = {
    name,
    address,
    idCity
  }

  cinemasModel.updateCinemas(id, data)
    .then((result) => {
      if (result === 0) {
        throw new Error(`Cannot update cinemas with id = ${id}`)
      } else {
        helper.print(res, 200, 'Cinemas has been updated', result)
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

  cinemasModel.deleteCinemas(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete cinemas with id = ${id}`)
      }
      helper.print(res, 200, 'Cinemas has been deleted', {})
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}
