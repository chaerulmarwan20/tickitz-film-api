const connection = require("../configs/dbConfig");
const helper = require("../helpers/linkPaginate");

exports.getAllTransactions = (
  queryPage,
  queryPerPage,
  keyword,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions INNER JOIN cinemas ON transactions.idCinema = cinemas.id WHERE transactions.paymentMethod LIKE ? OR cinemas.name LIKE ? OR transactions.status LIKE ?",
      [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`],
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
            "transactions"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, transactions.movieTitle, transactions.category, cinemas.name AS cinema, cinemas.image AS imageCinema, transactions.qty, transactions.seat, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN cinemas ON transactions.idCinema = cinemas.id) WHERE transactions.paymentMethod LIKE ? OR cinemas.name LIKE ? OR transactions.status LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`, firstData, perPage],
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

exports.getTransactionsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT transactions.id, transactions.date AS dateTransactions, transactions.time, transactions.paymentMethod, users.fullName, transactions.movieTitle, transactions.category, cinemas.name AS cinema, cinemas.image AS imageCinema, transactions.qty, transactions.seat, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN cinemas ON transactions.idCinema = cinemas.id) WHERE transactions.id = ?`,
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

exports.createTransactions = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO transactions SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM transactions WHERE id = ?",
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

exports.updateTransactions = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE transactions SET ? WHERE id = ?",
      [data, id],
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM transactions WHERE id = ?",
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

exports.deleteTransactions = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM transactions WHERE id = ?",
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

exports.getUser = (idUser) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT users.id FROM users WHERE id = ?",
      idUser,
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

exports.getCinema = (idCinema) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT cinemas.id FROM cinemas WHERE id = ?",
      idCinema,
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

exports.getTransactionsUsers = (id, queryPage, queryPerPage, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions WHERE transactions.idUser = ?",
      id,
      (err, result) => {
        let totalData, page, perPage, totalPage, previousPage, nextPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 10;
          totalPage = Math.ceil(totalData / perPage);
          const [previous, next] = helper.link(
            page,
            perPage,
            totalPage,
            "",
            sortBy,
            order,
            `transactions/users/${id}`
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, transactions.time, users.fullName, transactions.movieTitle, transactions.category, cinemas.name AS cinema, cinemas.image AS imageCinema, transactions.qty, transactions.seat, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN cinemas ON transactions.idCinema = cinemas.id) WHERE transactions.idUser = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [id, firstData, perPage],
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

exports.updateTickets = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE tickets SET available = false WHERE id = ?",
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

exports.createDetailTransactions = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO detail_transactions SET ?",
      data,
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM detail_transactions WHERE id = ?",
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
      }
    );
  });
};

exports.checkMoviegoers = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT moviegoers FROM users WHERE id = ? AND moviegoers = true",
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

exports.updatePoint = (id, ticket) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE users set point = point + ${1 * ticket.length} WHERE id = ?`,
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
