const connection = require('../configs/dbConfig')

exports.getAllCinemas = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT cinemas.id, cinemas.name, cinemas.address, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id', (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
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

exports.searchCinemas = (keyword) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT cinemas.id, cinemas.name, cinemas.address, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id WHERE cinemas.name LIKE ? OR cities.name LIKE ?', [keyword, keyword], (err, result) => {
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
