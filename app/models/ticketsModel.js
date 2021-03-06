const connection = require('../configs/dbConfig')

exports.getAllTickets = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id)', (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

exports.getTicketsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) WHERE tickets.id = ?', id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
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
            reject(err)
          }
        })
      } else {
        reject(err)
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
            reject(err)
          }
        })
      } else {
        reject(err)
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
        reject(err)
      }
    })
  })
}

exports.sortByDate = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) ORDER BY tickets.createdAt DESC', (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
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
        reject(err)
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
        reject(err)
      }
    })
  })
}

exports.searchMoviesTickets = (keyword) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT movies.title, movies.genre, movies.cast, movies.synopsis, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, tickets.qty FROM movies INNER JOIN tickets ON movies.id = tickets.idMovie WHERE movies.title LIKE ? AND tickets.qty > 0', keyword, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}
