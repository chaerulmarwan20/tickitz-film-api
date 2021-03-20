const connection = require("../configs/dbConfig");
const helper = require("../helpers/linkPaginate");

exports.getAllPayments = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM payments WHERE name LIKE ?",
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
            "payments"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT * FROM payments WHERE name LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
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

exports.getPaymentsById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM payments WHERE id = ?",
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

exports.createPayments = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO payments SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM payments WHERE id = ?",
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

exports.updatePayments = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE payments SET ? WHERE id = ?",
      [data, id],
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM payments WHERE id = ?",
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

exports.deletePayments = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM payments WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.findPayments = (id, message) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM payments WHERE id = ?",
      id,
      (err, result) => {
        if (!err) {
          if (result.length == 1) {
            resolve(result);
          } else {
            reject(new Error(`Cannot ${message} payments with id = ${id}`));
          }
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};
