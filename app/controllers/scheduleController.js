const redis = require("redis");
const port = process.env.REDIS_PORT;
const client = redis.createClient(port);
const scheduleModel = require("../models/scheduleModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const idMovie = req.query.movie;
  const date = req.query.date;
  const idCity = req.query.city;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  if (!idMovie || !date || !idCity) {
    helper.printError(res, 400, "Provide date, idMovie, and idCity");
    return;
  }
  scheduleModel
    .getAllSchedule(
      page,
      perPage,
      keyword,
      sortBy,
      order,
      idMovie,
      date,
      idCity
    )
    .then(
      ([
        totalData,
        totalPage,
        result,
        page,
        perPage,
        previousPage,
        nextPage,
      ]) => {
        if (result < 1) {
          helper.printError(res, 400, "Schedule not found");
          return;
        }
        client.setex(
          "getAllSchedule",
          60 * 60 * 12,
          JSON.stringify({
            totalData,
            totalPage,
            result,
            page,
            perPage,
            previousPage,
            nextPage,
            url,
            message: "Find all schedule successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all schedule successfully",
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage
        );
      }
    )
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findAllTime = (req, res) => {
  scheduleModel
    .getAllTime()
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, "Schedule not found");
        return;
      }
      helper.printSuccess(res, 200, "Find all time successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findAllTicket = (req, res) => {
  scheduleModel
    .getAllTicket()
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, "Ticket not found");
        return;
      }
      helper.printSuccess(res, 200, "Find all ticket successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  const url = req.originalUrl;

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  scheduleModel
    .getScheduleById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one schedule with id = ${id}`);
        return;
      }
      client.setex(
        "getScheduleById",
        60 * 60 * 12,
        JSON.stringify({
          result,
          url,
          message: "Find one schedule successfully",
        })
      );
      helper.printSuccess(res, 200, "Find one schedule successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.createSeat = (req, res) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  arr.forEach((element) => {
    const data = {
      row: "G",
      seat: element,
    };
    scheduleModel.createSeat(data);
  });
  helper.printSuccess(res, 200, "New seats has been created", {});
};

exports.createTicket = (req, res) => {
  for (let i = 1; i <= 98; i++) {
    const data = {
      movieTitle: "The Old Guard",
      category: "PG-13",
      price: 10,
      available: true,
      idSchedule: 1,
      time: "08:30am",
      idSeat: i,
      idMovie: 1,
    };
    scheduleModel.createTicket(data);
  }
  helper.printSuccess(res, 200, "New tickets has been created", {});
};

// exports.create = async (req, res) => {
//   const { price, available, idMovie, idSchedule, idSeat } = req.body;

//   if (!price || !available || !idMovie || !idSchedule || !idSeat) {
//     helper.printError(res, 400, "Content cannot be empty");
//     return;
//   }

//   let titleMovie;
//   try {
//     const getTitle = await scheduleModel.getMovieTitle(idMovie);
//     if (getTitle < 1) {
//       helper.printError(res, 400, "Id movie or cinema not found!");
//       return;
//     }
//     titleMovie = getTitle[0].title;
//   } catch (err) {
//     helper.printError(res, 500, err.message);
//   }

//   const data = {
//     movieTitle: titleMovie,
//     price,
//     available,
//     idSchedule,
//     idSeat,
//     idMovie,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };

//   scheduleModel
//     .createTickets(data)
//     .then((result) => {
//       if (result.affectedRows === 0) {
//         helper.printError(res, 400, "Error creating movies");
//         return;
//       }
//       helper.printSuccess(res, 200, "New movies has been created", result);
//     })
//     .catch((err) => {
//       helper.printError(res, 500, err.message);
//     });
// };

// exports.update = async (req, res) => {
//   const id = req.params.id;
//   const checkId = /^[0-9]+$/;

//   const { price, available, idMovie, idSchedule, idSeat } = req.body;

//   if (!price || !available || !idMovie || !idSchedule || !idSeat) {
//     helper.printError(res, 400, "Content cannot be empty");
//     return;
//   } else if (id.match(checkId) == null) {
//     helper.printError(res, 400, "Provide a valid id!");
//     return;
//   }

//   let titleMovie;
//   try {
//     const getTitle = await scheduleModel.getMovieTitle(idMovie);
//     if (getTitle < 1) {
//       helper.printError(res, 400, "Id movie or cinema not found!");
//       return;
//     }
//     titleMovie = getTitle[0].title;
//   } catch (err) {
//     helper.printError(res, 500, err.message);
//   }

//   const data = {
//     movieTitle: titleMovie,
//     price,
//     available,
//     idSchedule,
//     idSeat,
//     idMovie,
//   };

//   scheduleModel
//     .updateTickets(id, data)
//     .then((result) => {
//       if (result < 1) {
//         helper.printError(res, 400, `Cannot update tickets with id = ${id}`);
//         return;
//       }
//       helper.printSuccess(res, 200, "Tickets has been updated", result);
//     })
//     .catch((err) => {
//       helper.printError(res, 500, err.message);
//     });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   const checkId = /^[0-9]+$/;
//   if (id.match(checkId) == null) {
//     helper.printError(res, 400, "Provide a valid id!");
//     return;
//   }

//   scheduleModel
//     .deleteTickets(id)
//     .then((result) => {
//       if (result.affectedRows === 0) {
//         helper.printError(res, 400, `Cannot delete tickets with id = ${id}`);
//         return;
//       }
//       helper.printSuccess(res, 200, "Tickets has been deleted", {});
//     })
//     .catch((err) => {
//       helper.printError(res, 500, err.message);
//     });
// };
