const connection = require('../configs/dbConfig')

exports.getAllTickets = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS totalData FROM movies INNER JOIN tickets ON movies.id = tickets.idMovie WHERE movies.title LIKE ? AND tickets.qty > 0', `%${keyword}%`, (err, result) => {
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
      connection.query(`SELECT tickets.id, movies.title AS movies, movies.genre, movies.cast, movies.synopsis, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, tickets.qty FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) WHERE movies.title LIKE ? AND tickets.qty > 0 ORDER BY ${sortBy} ${order} LIMIT ?, ?`, [`%${keyword}%`, firstData, perPage], (err, result) => {
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
