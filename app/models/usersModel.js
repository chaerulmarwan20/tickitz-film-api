const connection = require('../configs/dbConfig')

exports.getAllUsers = (queryPage, queryPerPage, keyword) => {
  return new Promise((resolve, reject) => {
    let queryCount = 'SELECT COUNT(*) AS totalData FROM users'
    let queryLimit = 'SELECT * FROM users LIMIT ?, ?'
    if (keyword != null) {
      queryCount = 'SELECT COUNT(*) AS totalData FROM users WHERE fullName LIKE ? OR username LIKE ? OR email LIKE ?'
      queryLimit = 'SELECT * FROM users WHERE fullName LIKE ? OR username LIKE ? OR email LIKE ? LIMIT ?, ?'
    }
    connection.query(queryCount, [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`], (err, result) => {
      let totalData, page, perPage, totalPage
      if (err) {
        reject(new Error('Internal server error'))
      } else {
        totalData = result[0].totalData
        page = queryPage ? parseInt(queryPage) : 1
        perPage = queryPerPage ? parseInt(queryPerPage) : 5
        totalPage = Math.ceil(totalData / perPage)
      }
      const firstData = (perPage * page) - perPage
      connection.query(queryLimit, [keyword != null ? `%${keyword}%` : firstData, keyword != null ? `%${keyword}%` : perPage, keyword != null ? `%${keyword}%` : firstData, firstData, perPage], (err, result) => {
        if (err) {
          reject(new Error('Internal server error'))
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getUsersById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}

exports.createUsers = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', data, (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM users WHERE id = ?', result.insertId, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error('Internal server error'))
          }
        })
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}

exports.updateUsers = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error('Internal server error'))
          }
        })
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}

exports.deleteUsers = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}
