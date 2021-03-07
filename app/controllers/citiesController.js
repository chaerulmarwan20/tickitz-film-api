const citiesModel = require('../models/citiesModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const keyword = req.query.keyword ? req.query.keyword : null
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  citiesModel.getAllCities(queryPage, queryPerPage, keyword)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Cities not found')
      }
      res.status(200).json({
        status: true,
        message: 'Find cities successfully',
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

  citiesModel.getCitiesById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Error find one cities with id = ${id}`)
      }
      helper.print(res, 200, 'Find one cities successfully', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.create = (req, res) => {
  const { name } = req.body

  if (!name) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  }

  const data = {
    name,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  citiesModel.createCities(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error('Error creating cities')
      }
      helper.print(res, 200, 'New cities has been created', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { name } = req.body

  if (!name) {
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

  const data = {
    name
  }

  citiesModel.updateCities(id, data)
    .then((result) => {
      if (result === 0) {
        throw new Error(`Cannot update cities with id = ${id}`)
      } else {
        helper.print(res, 200, 'Cities has been updated', result)
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

  citiesModel.deleteCities(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete cities with id = ${id}`)
      }
      helper.print(res, 200, 'Cities has been deleted', {})
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}
