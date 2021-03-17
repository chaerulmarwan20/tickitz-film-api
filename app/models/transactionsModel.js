const connection = require("../configs/dbConfig");

exports.getAllTransactions = (
  queryPage,
  queryPerPage,
  keyword,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions WHERE transactions.paymentMethod LIKE ? OR transactions.status LIKE ?",
      [`%${keyword}%`, `%${keyword}%`],
      (err, result) => {
        let totalData, page, perPage, totalPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.paymentMethod LIKE ? OR transactions.status LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, `%${keyword}%`, firstData, perPage],
          (err, result) => {
            if (err) {
              reject(new Error("Internal server error"));
            } else {
              resolve([totalData, totalPage, result, page, perPage]);
            }
          }
        );
      }
    );
  });
};

exports.getTransactionsSuccessed = (queryPage, queryPerPage, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions WHERE status = ?",
      "SUCCESS",
      (err, result) => {
        let totalData, page, perPage, totalPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.status = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          ["SUCCESS", firstData, perPage],
          (err, result) => {
            if (err) {
              reject(new Error("Internal server error"));
            } else {
              resolve([totalData, totalPage, result, page, perPage]);
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
      "SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, tickets.idCinema, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.idUser = ?",
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

exports.getTicket = (idTicket) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT tickets.id FROM tickets WHERE id = ?",
      idTicket,
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

exports.search = (queryPage, queryPerPage, from, to, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions WHERE date BETWEEN ? AND ?",
      [from, to],
      (err, result) => {
        let totalData, page, perPage, totalPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total, transactions.status FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.date BETWEEN ? AND ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [from, to, firstData, perPage],
          (err, result) => {
            if (err) {
              reject(new Error("Internal server error"));
            } else {
              resolve([totalData, totalPage, result, page, perPage]);
            }
          }
        );
      }
    );
  });
};
