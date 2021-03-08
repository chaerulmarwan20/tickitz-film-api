const cinemasModel = require('../models/cinemasModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  const keyword = req.query.keyword ? req.query.keyword : null
  cinemasModel.getAllCinemas(queryPage, queryPerPage, keyword)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Cinemas not found')
      }
      helper.printPaginate(res, 200, 'Find all cinemas successfully', totalData, totalPage, result, page, perPage)
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

  cinemasModel.getCinemasById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Cannot fine one cinemas with id = ${id}`)
      }
      helper.printSuccess(res, 200, 'Find one cinemas successfully', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.create = async (req, res) => {
  const { name, address, idCity } = req.body

  if (!name || !address || !idCity) {
    helper.printError(res, 400, 'Content cannot be empty')
    return
  }

  try {
    const getCity = await cinemasModel.getCity(idCity)
    if (getCity < 1) {
      helper.printError(res, 400, 'Id city not found!')
      return
    }
  } catch (err) {
    helper.printError(res, 500, err.message)
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
      helper.printSuccess(res, 200, 'New cinemas has been created', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { name, address, idCity } = req.body

  if (!name || !address || !idCity) {
    helper.printError(res, 400, 'Content cannot be empty')
    return
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, 'Provide a valid id!')
    return
  }

  try {
    const getCity = await cinemasModel.getCity(idCity)
    if (getCity < 1) {
      helper.printError(res, 400, 'Id city not found!')
      return
    }
  } catch (err) {
    helper.printError(res, 500, err.message)
  }

  const data = {
    name,
    address,
    idCity
  }

  cinemasModel.updateCinemas(id, data)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Cannot update cinemas with id = ${id}`)
      }
      helper.printSuccess(res, 200, 'Cinemas has been updated', result)
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

  cinemasModel.deleteCinemas(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete cinemas with id = ${id}`)
      }
      helper.printSuccess(res, 200, 'Cinemas has been deleted', {})
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}
