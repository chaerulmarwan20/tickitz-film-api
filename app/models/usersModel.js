const connection = require("../configs/dbConfig");

exports.getAllUsers = (queryPage, queryPerPage, keyword, sortBy, order) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM users WHERE fullName LIKE ? OR username LIKE ? OR email LIKE ?",
      [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`],
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
          `SELECT * FROM users WHERE fullName LIKE ? OR username LIKE ? OR email LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`, firstData, perPage],
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

exports.getUsersById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.createUsers = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      data.email,
      (err, result) => {
        if (result.length > 0) {
          reject(new Error("Email has been registered"));
        } else {
          connection.query("INSERT INTO users SET ?", data, (err, result) => {
            if (!err) {
              connection.query(
                "SELECT * FROM users WHERE id = ?",
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
        }
      }
    );
  });
};

exports.updateUsers = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE users SET ? WHERE id = ?",
      [data, id],
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM users WHERE id = ?",
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

exports.deleteUsers = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.moviegoers = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE users SET moviegoers = true WHERE email = ?",
      email,
      (err, result) => {
        if (!err) {
          connection.query(
            "SELECT * FROM users WHERE email = ?",
            email,
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

exports.login = (data) => {
  let post = {
    email: data.email,
    password: data.password,
  };

  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [post.email, post.password],
      (err, result) => {
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          if (result.length == 1) {
            resolve(result);
          } else {
            reject(new Error("Wrong email or password"));
          }
        }
      }
    );
  });
};
