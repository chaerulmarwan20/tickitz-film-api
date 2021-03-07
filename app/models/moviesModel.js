const connection = require('../configs/dbConfig')

exports.getAllMovies = (queryPage, queryPerPage, keyword) => {
  return new Promise((resolve, reject) => {
    let queryCount = 'SELECT COUNT(*) AS totalData FROM movies'
    let queryLimit = 'SELECT * FROM movies LIMIT ?, ?'
    if (keyword != null) {
      queryCount = 'SELECT COUNT(*) AS totalData FROM movies WHERE title LIKE ? '
      queryLimit = 'SELECT * FROM movies WHERE title LIKE ? LIMIT ?, ?'
    }
    connection.query(queryCount, `%${keyword}%`, (err, result) => {
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

exports.getMoviesRealesed = (queryPage, queryPerPage) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS totalData FROM movies WHERE realesed = true', (err, result) => {
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
      connection.query('SELECT * FROM movies WHERE realesed = true LIMIT ?, ?', [firstData, perPage], (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getMoviesById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM movies WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.createMovies = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO movies SET ?', data, (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM movies WHERE id = ?', result.insertId, (err, result) => {
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

exports.updateMovies = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE movies SET ? WHERE id = ?', [data, id], (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM movies WHERE id = ?', id, (err, result) => {
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

exports.deleteMovies = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM movies WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}
