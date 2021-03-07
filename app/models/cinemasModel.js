const connection = require('../configs/dbConfig')

exports.getAllCinemas = (queryPage, queryPerPage, keyword) => {
  return new Promise((resolve, reject) => {
    let queryCount = 'SELECT COUNT(*) AS totalData FROM cinemas'
    let queryLimit = 'SELECT cinemas.id, cinemas.name, cinemas.address, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id LIMIT ?, ?'
    if (keyword != null) {
      queryCount = 'SELECT COUNT(*) AS totalData FROM cinemas WHERE name LIKE ? '
      queryLimit = 'SELECT cinemas.id, cinemas.name, cinemas.address, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id WHERE name LIKE ? LIMIT ?, ?'
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

exports.getCinemasById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT cinemas.id, cinemas.name, cinemas.address, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id WHERE cinemas.id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.createCinemas = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO cinemas SET ?', data, (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM cinemas WHERE id = ?', result.insertId, (err, result) => {
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

exports.updateCinemas = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE cinemas SET ? WHERE id = ?', [data, id], (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM cinemas WHERE id = ?', id, (err, result) => {
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

exports.deleteCinemas = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM cinemas WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.getCity = (idCity) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT cities.id FROM cities WHERE id = ?', idCity, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}
