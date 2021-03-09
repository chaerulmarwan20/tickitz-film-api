const usersModel = require('../models/usersModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const {page, perPage} = req.query
  const keyword = req.query.keyword ? req.query.keyword : ''
  const sortBy = req.query.sortBy ? req.query.sortBy : 'id'
  const order = req.query.order ? req.query.order : 'ASC'
  usersModel.getAllUsers(page, perPage, keyword, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, 'Users not found')
        return
      }
      helper.printPaginate(res, 200, 'Find all users successfully', totalData, totalPage, result, page, perPage)
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

  usersModel.getUsersById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one users with id = ${id}`)
        return
      }
      helper.printSuccess(res, 200, 'Find one users successfully', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.create = (req, res) => {
  const { fullName, phoneNumber, username, email, password } = req.body

  if (!fullName || !phoneNumber || !username || !email || !password) {
    helper.printError(res, 400, 'Content cannot be empty')
    return
  }

  const data = {
    fullName,
    image: 'default.jpg',
    phoneNumber,
    username,
    email,
    password,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  usersModel.createUsers(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, 'Error creating users')
        return
      }
      helper.printSuccess(res, 200, 'New users has been created', result)
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { fullName, phoneNumber, username, email, password } = req.body

  if (!fullName || !phoneNumber || !username || !email || !password) {
    helper.printError(res, 400, 'Content cannot be empty')
    return
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, 'Provide a valid id!')
    return
  }

  const data = {
    fullName,
    image: 'default.jpg',
    phoneNumber,
    username,
    email,
    password
  }

  usersModel.updateUsers(id, data)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot update users with id = ${id}`)
        return
      }
      helper.printSuccess(res, 200, 'Users has been updated', result)
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

  usersModel.deleteUsers(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, `Cannot delete users with id = ${id}`)
        return
      }
      helper.printSuccess(res, 200, 'Users has been deleted', {})
    })
    .catch((err) => {
      helper.printError(res, 500, err.message)
    })
}
