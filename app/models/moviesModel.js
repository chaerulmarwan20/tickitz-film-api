const connection = require("../configs/dbConfig");
const helper = require("../helpers/linkPaginate");

exports.getAllMovies = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE title LIKE ?",
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
            "movies"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT * FROM movies WHERE title LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
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

exports.getMoviesRealesed = (
  keyword,
  queryPage,
  queryPerPage,
  sortBy,
  order
) => {
  let data;
  if (keyword === "true") {
    data = true;
  } else if (keyword === "false") {
    data = false;
  }
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE realesed = ?",
      data,
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
            "movies/realesed"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT * FROM movies WHERE realesed = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [data, firstData, perPage],
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

exports.getMoviesByDate = (date) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM movies WHERE dateRealesed LIKE ? AND realesed = false",
      `%-${date}-%`,
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

exports.findMovies = (id, message) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM movies WHERE id = ?", id, (err, result) => {
      if (!err) {
        if (result.length == 1) {
          resolve(result);
        } else {
          reject(new Error(`Cannot ${message} movie with id = ${id}`));
        }
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.isMoviesRealese = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM movies WHERE title LIKE ? AND realesed = true",
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
            "movies/is-realese"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT * FROM movies WHERE title LIKE ? AND realesed = true ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
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

exports.isMoviesNotRealese = (
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
            "movies/is-not-realese"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT * FROM movies WHERE title LIKE ? AND realesed = false ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
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
