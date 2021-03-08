const connection = require('../configs/dbConfig')

exports.getAllTickets = (queryPage, queryPerPage, keyword) => {
  return new Promise((resolve, reject) => {
    let queryCount = 'SELECT COUNT(*) AS totalData FROM tickets'
    let queryLimit = 'SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) LIMIT ?, ?'
    if (keyword != null) {
      queryCount = 'SELECT COUNT(*) AS totalData FROM movies INNER JOIN tickets ON movies.id = tickets.idMovie WHERE movies.title LIKE ? AND tickets.qty > 0 '
      queryLimit = 'SELECT movies.title AS movies, movies.genre, movies.cast, movies.synopsis, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, tickets.qty FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) WHERE movies.title LIKE ? AND tickets.qty > 0 LIMIT ?, ?'
    }
    connection.query(queryCount, `%${keyword}%`, (err, result) => {
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
      connection.query(queryLimit, [keyword != null ? `%${keyword}%` : firstData, keyword != null ? firstData : perPage, perPage], (err, result) => {
        if (err) {
          reject(new Error('Internal server error'))
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getTicketsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) WHERE tickets.id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}

exports.createTickets = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO tickets SET ?', data, (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM tickets WHERE id = ?', result.insertId, (err, result) => {
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

exports.updateTickets = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE tickets SET ? WHERE id = ?', [data, id], (err, result) => {
      if (!err) {
        connection.query('SELECT * FROM tickets WHERE id = ?', id, (err, result) => {
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

exports.deleteTickets = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM tickets WHERE id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}

exports.sortByDate = (queryPage, queryPerPage) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS totalData FROM tickets', (err, result) => {
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
      connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) ORDER BY tickets.createdAt DESC LIMIT ?, ?', [firstData, perPage], (err, result) => {
        if (err) {
          reject(new Error('Internal server error'))
        } else {
          resolve([totalData, totalPage, result, page, perPage])
        }
      })
    })
  })
}

exports.getMovieTitle = (idMovie) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT movies.title FROM movies WHERE id = ?', idMovie, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}

exports.getCinema = (idCinema) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT cinemas.id FROM cinemas WHERE id = ?', idCinema, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error('Internal server error'))
      }
    })
  })
}