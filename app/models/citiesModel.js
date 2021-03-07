const connection = require('../configs/dbConfig')

exports.getAllCities = (queryPage, queryPerPage, keyword) => {
  return new Promise((resolve, reject) => {
    let queryCount = 'SELECT COUNT(*) AS totalData FROM cities'
    let queryLimit = 'SELECT * FROM cities LIMIT ?, ?'
    if (keyword != null) {
      queryCount = 'SELECT COUNT(*) AS totalData FROM cities WHERE name LIKE ? '
      queryLimit = 'SELECT * FROM cities WHERE name LIKE ? LIMIT ?, ?'
    }
    connection.query(queryCount, `%${keyword}%`, (err, result) => {
      let totalData
      let page
      let perPage
      let totalPage
      if (err) {
        reject(err)
      } else {
        totalData = result[0].totalData
        page = queryPage ? parseInt(queryPage) : 1
        perPage = queryPerPage ? parseInt(queryPerPage) : 5
        totalPage = Math.ceil(totalData / perPage)
      }
      const firstData = (perPage * page) - perPage
      connection.query(queryLimit, [keyword != null ? `%${keyword}%` : firstData, keyword != null ? firstData : perPage, perPage], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getCitiesById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM cities WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.createCities = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO cities SET ?', data, (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM cities WHERE id = ?', result.insertId, (err, result) => {
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

exports.updateCities = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE cities SET ? WHERE id = ?', [data, id], (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM cities WHERE id = ?', id, (err, result) => {
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

exports.deleteCities = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM cities WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}