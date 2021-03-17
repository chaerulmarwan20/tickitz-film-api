const connection = require("../configs/dbConfig");

exports.getAllMovies = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE title LIKE ?",
      `%${keyword}%`,
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
          `SELECT * FROM movies WHERE title LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, firstData, perPage],
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

exports.getMoviesRealesed = (
  realese,
  queryPage,
  queryPerPage,
  sortBy,
  order
) => {
  let data;
  if (realese === "true") {
    data = true;
  } else {
    data = false;
  }
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE realesed = ?",
      data,
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
          `SELECT * FROM movies WHERE realesed = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [data, firstData, perPage],
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

exports.getMoviesById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM movies WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.createMovies = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO movies SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM movies WHERE id = ?",
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

exports.updateMovies = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE movies SET ? WHERE id = ?",
      [data, id],
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM movies WHERE id = ?",
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

exports.deleteMovies = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM movies WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.searchMoviesRealese = (
  queryPage,
  queryPerPage,
  keyword,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE title LIKE ? AND realesed = true",
      `%${keyword}%`,
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
          `SELECT * FROM movies WHERE title LIKE ? AND realesed = true ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, firstData, perPage],
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

exports.searchMoviesNotRealese = (
  queryPage,
  queryPerPage,
  keyword,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE title LIKE ? AND realesed = false",
      `%${keyword}%`,
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
          `SELECT * FROM movies WHERE title LIKE ? AND realesed = false ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, firstData, perPage],
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
