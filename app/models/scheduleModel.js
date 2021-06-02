const connection = require("../configs/dbConfig");
const helper = require("../helpers/linkPaginate");

exports.getAllSchedule = (
  queryPage,
  queryPerPage,
  keyword,
  sortBy,
  order,
  idMovie,
  date,
  idCity
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM schedule INNER JOIN cinemas ON schedule.idCinema = cinemas.id INNER JOIN movies ON schedule.idMovie = movies.id WHERE schedule.idMovie = ? AND schedule.idCity = ? AND schedule.date = ?",
      [idMovie, idCity, date],
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
            "schedule"
          );
          previousPage = previous;
          nextPage = next;
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT schedule.id, schedule.day, schedule.date, schedule.price, schedule.time, cinemas.image, cinemas.address, cinemas.name FROM schedule INNER JOIN cinemas ON schedule.idCinema = cinemas.id INNER JOIN movies ON schedule.idMovie = movies.id WHERE schedule.idMovie = ? AND schedule.idCity = ? AND schedule.date = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [idMovie, idCity, date, firstData, perPage],
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

exports.getAllTime = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM time", (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.getAllTicket = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT idSchedule FROM tickets where available = true",
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

exports.getScheduleById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT schedule.id, schedule.day, schedule.date, schedule.price, schedule.idMovie, schedule.idCinema, movies.title AS movie, cinemas.image, cinemas.address, cinemas.name FROM ((schedule INNER JOIN cinemas ON schedule.idCinema = cinemas.id) INNER JOIN movies ON schedule.idMovie = movies.id) WHERE schedule.id = ?",
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

exports.createSeat = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO seat SET ?", data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.createTicket = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO tickets SET ?", data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.createSchedule = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO schedule SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM schedule WHERE id = ?",
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
