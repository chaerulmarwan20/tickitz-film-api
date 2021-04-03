const connection = require("../configs/dbConfig");
const helper = require("../helpers/linkPaginate");

exports.getAllTickets = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies INNER JOIN tickets ON movies.id = tickets.idMovie WHERE movies.title LIKE ? AND tickets.available = true",
      `%${keyword}%`,
      (err, result) => {
        let totalData, page, perPage, totalPage, previousPage, nextPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
          const [previous, next] = helper.link(
            page,
            perPage,
            totalPage,
            keyword,
            sortBy,
            order,
            "tickets"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT tickets.id, movies.title AS movies, seat.row, seat.seat, schedule.day, schedule.date, tickets.price, tickets.available FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN schedule ON tickets.idSchedule = schedule.id INNER JOIN seat ON tickets.idSeat = seat.id) WHERE movies.title LIKE ? AND tickets.available = true ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, firstData, perPage],
          (err, result) => {
            if (err) {
              reject(new Error("Internal server error"));
            } else {
              resolve([
                totalData,
                totalPage,
                result,
                page,
                perPage,
                previousPage,
                nextPage,
              ]);
            }
          }
        );
      }
    );
  });
};

exports.getTicketsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT tickets.id, movies.title AS movies, seat.row, seat.seat, schedule.day, schedule.date, schedule.time, tickets.price, tickets.available FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN schedule ON tickets.idSchedule = schedule.id INNER JOIN seat ON tickets.idSeat = seat.id) WHERE tickets.id = ?",
      id,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};

exports.getAllTicketsOrder = (idSchedule, idTime, idMovie) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT tickets.id, tickets.movieTitle, tickets.category, tickets.price, tickets.available, seat.row, seat.seat FROM tickets INNER JOIN seat ON tickets.idSeat = seat.id WHERE idSchedule = ? AND idTime = ? AND idMovie = ?`,
      [idSchedule, idTime, idMovie],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};

exports.createTickets = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO tickets SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM tickets WHERE id = ?",
          result.insertId,
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error("Internal server error"));
            }
          }
        );
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.updateTickets = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE tickets SET ? WHERE id = ?",
      [data, id],
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM tickets WHERE id = ?",
            id,
            (err, result) => {
              if (!err) {
                resolve(result);
              } else {
                reject(new Error("Internal server error"));
              }
            }
          );
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};

exports.deleteTickets = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM tickets WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.getMovieTitle = (idMovie) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT movies.title FROM movies WHERE id = ?",
      idMovie,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};
