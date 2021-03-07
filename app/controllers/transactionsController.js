const transactionsModel = require('../models/transactionsModel')
const helper = require('../helpers/printHelper')

exports.findAll = (req, res) => {
  const keyword = req.query.keyword ? req.query.keyword : null
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  transactionsModel.getAllTransactions(queryPage, queryPerPage, keyword)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Transactions not found')
      }
      res.status(200).json({
        status: true,
        message: 'Find transactions successfully',
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

exports.findAllSuccessed = (req, res) => {
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  transactionsModel.getTransactionsSuccessed(queryPage, queryPerPage)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Transactions successed not found')
      }
      res.status(200).json({
        status: true,
        message: 'Find transactions successed successfully',
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

  transactionsModel.getTransactionsById(id)
    .then((result) => {
      if (result < 1) {
        throw new Error(`Error find one transactions with id = ${id}`)
      }
      helper.print(res, 200, 'Find one transactions successfully', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.create = async (req, res) => {
  const { paymentMethod, idUser, idTicket, qty, total } = req.body

  if (!paymentMethod || !idUser || !idTicket || !qty || !total) {
    res.status(400).send({
      status: false,
      message: 'Content cannot be empty'
    })
    return
  }

  try {
    const getUser = await transactionsModel.getUser(idUser)
    const getTicket = await transactionsModel.getTicket(idTicket)
    if (getTicket < 1 || getUser < 1) {
      res.status(400).send({
        status: false,
        message: 'Provide an id user and ticket!'
      })
      return
    }
  } catch (err) {
    helper.print(res, 500, err.message, {})
  }

  const data = {
    date: new Date(),
    paymentMethod,
    idUser,
    idTicket,
    qty,
    total,
    status: 'PENDING',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  transactionsModel.createTransactions(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error('Error creating transactions')
      }
      helper.print(res, 200, 'New transactions has been created', result)
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const checkId = /^[0-9]+$/

  const { paymentMethod, idUser, idTicket, qty, total, status } = req.body

  if (!paymentMethod || !idUser || !idTicket || !qty || !total || !status) {
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

  try {
    const getUser = await transactionsModel.getUser(idUser)
    const getTicket = await transactionsModel.getTicket(idTicket)
    if (getTicket < 1 || getUser < 1) {
      res.status(400).send({
        status: false,
        message: 'Provide an id user and ticket!'
      })
      return
    }
  } catch (err) {
    helper.print(res, 500, err.message, {})
  }

  const data = {
    paymentMethod,
    idUser,
    idTicket,
    qty,
    total,
    status
  }

  transactionsModel.updateTransactions(id, data)
    .then((result) => {
      if (result === 0) {
        throw new Error(`Cannot update transactions with id = ${id}`)
      } else {
        helper.print(res, 200, 'Transactions has been updated', result)
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

  transactionsModel.deleteTransactions(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        throw new Error(`Cannot delete transactions with id = ${id}`)
      }
      helper.print(res, 200, 'Transactions has been deleted', {})
    })
    .catch((err) => {
      helper.print(res, 500, err.message, {})
    })
}

exports.sort = (req, res) => {
  const queryPage = req.query.page
  const queryPerPage = req.query.perPage
  transactionsModel.sortByDate(queryPage, queryPerPage)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        throw new Error('Sort by date transactions not found')
      }
      res.status(200).json({
        status: true,
        message: 'Sort by date transactions successfully',
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
