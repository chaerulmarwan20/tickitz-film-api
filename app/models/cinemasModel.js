const connection = require("../configs/dbConfig");
const helper = require("../helpers/linkPaginate");

exports.getAllCinemas = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM cinemas WHERE name LIKE ?",
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
            "cinemas"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT cinemas.id, cinemas.name, cinemas.address, cinemas.description, cinemas.image, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id WHERE cinemas.name LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
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

exports.getCinemasById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT cinemas.id, cinemas.name, cinemas.address, cities.name AS city, cinemas.createdAt, cinemas.updatedAt FROM cinemas INNER JOIN cities ON cinemas.idCity = cities.id WHERE cinemas.id = ?",
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

exports.createCinemas = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO cinemas SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM cinemas WHERE id = ?",
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

exports.updateCinemas = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE cinemas SET ? WHERE id = ?",
      [data, id],
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM cinemas WHERE id = ?",
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

exports.deleteCinemas = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM cinemas WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.getCity = (idCity) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT cities.id FROM cities WHERE id = ?",
      idCity,
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

exports.findCinemas = (id, message) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM cinemas WHERE id = ?",
      id,
      (err, result) => {
        if (!err) {
          if (result.length == 1) {
            resolve(result);
          } else {
            reject(new Error(`Cannot ${message} cinemas with id = ${id}`));
          }
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};
