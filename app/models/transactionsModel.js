const connection = require('../configs/dbConfig')

exports.getAllTransactions = (queryPage, queryPerPage, keyword) => {
  return new Promise((resolve, reject) => {
    let queryCount = 'SELECT COUNT(*) AS totalData FROM transactions'
    let queryLimit = 'SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) LIMIT ?, ?'
    if (keyword != null) {
      queryCount = 'SELECT COUNT(*) AS totalData FROM transactions WHERE transactions.paymentMethod LIKE ? OR transactions.status LIKE ? '
      queryLimit = 'SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.paymentMethod LIKE ? OR transactions.status LIKE ? LIMIT ?, ?'
    }
    connection.query(queryCount, [`%${keyword}%`, `%${keyword}%`], (err, result) => {
      let totalData, page, perPage, totalPage
      if (err) {
        reject(err)
      } else {
        totalData = result[0].totalData
        page = queryPage ? parseInt(queryPage) : 1
        perPage = queryPerPage ? parseInt(queryPerPage) : 5
        totalPage = Math.ceil(totalData / perPage)
      }
      const firstData = (perPage * page) - perPage
      connection.query(queryLimit, [keyword != null ? `%${keyword}%` : firstData, keyword != null ? `%${keyword}%` : perPage, firstData, perPage], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getTransactionsSuccessed = (queryPage, queryPerPage) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS totalData FROM transactions WHERE status = ?', 'SUCCESS', (err, result) => {
      let totalData, page, perPage, totalPage
      if (err) {
        reject(err)
      } else {
        totalData = result[0].totalData
        page = queryPage ? parseInt(queryPage) : 1
        perPage = queryPerPage ? parseInt(queryPerPage) : 5
        totalPage = Math.ceil(totalData / perPage)
      }
      const firstData = (perPage * page) - perPage
      connection.query('SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.status = ? LIMIT ?, ?', ['SUCCESS', firstData, perPage], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getTransactionsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.createTransactions = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO transactions SET ?', data, (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM transactions WHERE id = ?', result.insertId, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(err)
          }
        })
      } else {
        reject(err)
      }
    })
  })
}

exports.updateTransactions = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE transactions SET ? WHERE id = ?', [data, id], (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM transactions WHERE id = ?', id, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(err)
          }
        })
      } else {
        reject(err)
      }
    })
  })
}

exports.deleteTransactions = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM transactions WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.sortByDate = (queryPage, queryPerPage) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS totalData FROM transactions', (err, result) => {
      let totalData, page, perPage, totalPage
      if (err) {
        reject(err)
      } else {
        totalData = result[0].totalData
        page = queryPage ? parseInt(queryPage) : 1
        perPage = queryPerPage ? parseInt(queryPerPage) : 5
        totalPage = Math.ceil(totalData / perPage)
      }
      const firstData = (perPage * page) - perPage
      connection.query('SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) ORDER BY transactions.date DESC LIMIT ?, ?', [firstData, perPage], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getUser = (idUser) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT users.id FROM users WHERE id = ?', idUser, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.getTicket = (idTicket) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT tickets.id FROM tickets WHERE id = ?', idTicket, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}
