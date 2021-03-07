const usersModel = require('../models/usersModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const keyword = req.query.keyword ? req.query.keyword : null
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  usersModel.getAllUsers(queryPage, queryPerPage, keyword)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Users not found')
      }
      res.status(200).json({
        status: true,
        message: 'Find users successfully',
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

  usersModel.getUsersById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Error find one users with id = ${id}`)
      }
      helper.print(res, 200, 'Find one users successfully', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.create = (req, res) => {
  const { fullName, phoneNumber, username, email, password } = req.body

  if (!fullName || !phoneNumber || !username || !email || !password) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  }

  const data = {
    fullName,
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
        throw new Error('Error creating users')
      }
      helper.print(res, 200, 'New users has been created', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { fullName, phoneNumber, username, email, password } = req.body

  if (!fullName || !phoneNumber || !username || !email || !password) {
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
    fullName,
    phoneNumber,
    username,
    email,
    password
  }

  usersModel.updateUsers(id, data)
    .then((result) => {
      if (result === 0) {
        throw new Error(`Cannot update users with id = ${id}`)
      } else {
        helper.print(res, 200, 'Users has been updated', result)
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

  usersModel.deleteUsers(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete users with id = ${id}`)
      }
      helper.print(res, 200, 'Users has been deleted', {})
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}
