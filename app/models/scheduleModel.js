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
      "SELECT COUNT(*) AS totalData FROM schedule WHERE idMovie = ? AND idCity = ? AND date = ?",
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
          `SELECT schedule.id, schedule.day, schedule.date, schedule.time, cinemas.image, cinemas.address, cinemas.name, tickets.price FROM ((schedule INNER JOIN cinemas ON schedule.idCinema = cinemas.id) INNER JOIN tickets ON schedule.idTicket = tickets.id) WHERE schedule.idMovie = ? AND schedule.idCity = ? AND schedule.date = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
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

exports.getAllTime = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT time.time FROM schedule LEFT OUTER JOIN schedule_time ON schedule.id = schedule_time.idSchedule LEFT OUTER JOIN time ON schedule_time.idTime = time.id WHERE schedule.id = ?",
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

exports.getScheduleById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT schedule.id, schedule.day, schedule.date, schedule.time, cinemas.image, cinemas.address, cinemas.name, tickets.price FROM ((schedule INNER JOIN cinemas ON schedule.idCinema = cinemas.id) INNER JOIN tickets ON schedule.idTicket = tickets.id) WHERE schedule.id = ?",
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

// exports.createTickets = (data) => {
//   return new Promise((resolve, reject) => {
//     connection.query("INSERT INTO tickets SET ?", data, (err, result) => {
//       if (!err) {
//         connection.query(
//           "SELECT * FROM tickets WHERE id = ?",
//           result.insertId,
//           (err, result) => {
//             if (!err) {
//               resolve(result);
//             } else {
//               reject(new Error("Internal server error"));
//             }
//           }
//         );
//       } else {
//         reject(new Error("Internal server error"));
//       }
//     });
//   });
// };

// exports.updateTickets = (id, data) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "UPDATE tickets SET ? WHERE id = ?",
//       [data, id],
//       (err, result) => {
//         if (!err) {
//           connection.query(
//             "SELECT * FROM tickets WHERE id = ?",
//             id,
//             (err, result) => {
//               if (!err) {
//                 resolve(result);
//               } else {
//                 reject(new Error("Internal server error"));
//               }
//             }
//           );
//         } else {
//           reject(new Error("Internal server error"));
//         }
//       }
//     );
//   });
// };

// exports.deleteTickets = (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query("DELETE FROM tickets WHERE id = ?", id, (err, result) => {
//       if (!err) {
//         resolve(result);
//       } else {
//         reject(new Error("Internal server error"));
//       }
//     });
//   });
// };

// exports.getMovieTitle = (idMovie) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "SELECT movies.title FROM movies WHERE id = ?",
//       idMovie,
//       (err, result) => {
//         if (!err) {
//           resolve(result);
//         } else {
//           reject(new Error("Internal server error"));
//         }
//       }
//     );
//   });
// };