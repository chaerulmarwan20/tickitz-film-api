const path = require("path");
const fs = require("fs");
const moment = require("moment");
const redis = require("redis");
const port = process.env.REDIS_PORT;
const client = redis.createClient(port);
const scheduleModel = require("../models/scheduleModel");
const moviesModel = require("../models/moviesModel");
const validation = require("../helpers/validation");
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

exports.create = (req, res) => {
  req.body.cinema = JSON.parse(req.body.cinema);
  req.body.time = JSON.parse(req.body.time);

  if (req.body.cinema.length < 1) {
    helper.printError(res, 400, "Please select a premiere");
    return;
  } else if (req.body.time.length < 1) {
    helper.printError(res, 400, "Please select a time");
    return;
  }

  let image;

  if (!req.file) {
    helper.printError(res, 400, "Image is required");
    return;
  } else {
    image = req.file.path;
  }

  const formValidate = validation.validationSchedule(req.body);

  if (formValidate.error) {
    helper.printError(res, 400, formValidate.error.details[0].message);
    return;
  }

  const cinema = req.body.cinema;
  const time = req.body.time;

  const {
    title,
    genre,
    duration,
    director,
    cast,
    synopsis,
    category,
    realesed,
    dateRealesed,
    dateSchedule,
    city,
  } = req.body;

  const data = {
    title,
    image,
    genre,
    duration,
    director,
    cast,
    synopsis,
    category,
    realesed: realesed === true || realesed === "true" ? true : false,
    dateRealesed,
  };

  moviesModel
    .createMovies(data)
    .then(async (result) => {
      const idMovie = result[0].id;
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating movie");
        return;
      }
      const dayNow = moment(dateSchedule).format("dddd");
      for (let a = 0; a < cinema.length; a++) {
        const dataSchedule = {
          day: dayNow,
          date: dateSchedule,
          price: 30000,
          time: JSON.stringify(time),
          idCity: city,
          idMovie,
          idCinema: cinema[a],
        };
        let idSchedule;
        const scheduleResult = await scheduleModel.createSchedule(dataSchedule);
        idSchedule = scheduleResult[0].id;
        if (scheduleResult.affectedRows === 0) {
          helper.printError(res, 400, "Error creating movie");
          return;
        }
        for (let i = 0; i < time.length; i++) {
          for (let j = 1; j <= 98; j++) {
            const dataTicket = {
              movieTitle: title,
              category,
              available: true,
              idSchedule,
              time: time[i],
              idSeat: j,
              idMovie,
            };
            const ticketResult = await scheduleModel.createTicket(dataTicket);
            if (ticketResult.affectedRows === 0) {
              helper.printError(res, 400, "Error creating movie");
              return;
            }
          }
        }
      }
      helper.printSuccess(res, 200, "New movie has been created", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const formValidate = validation.validationMovie(req.body);

  if (formValidate.error) {
    helper.printError(res, 400, formValidate.error.details[0].message);
    return;
  }

  const {
    title,
    genre,
    duration,
    director,
    cast,
    synopsis,
    category,
    realesed,
  } = req.body;

  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  const data = {
    title,
    genre,
    duration,
    director,
    cast,
    synopsis,
    category,
    realesed: realesed === true || realesed === "true" ? true : false,
  };

  moviesModel
    .findMovies(id, "update")
    .then((result) => {
      let image;
      if (!req.file) {
        image = result[0].image;
      } else {
        const oldImage = result[0].image;
        removeImage(oldImage);
        image = req.file.path;
      }
      data.image = image;
      return moviesModel.updateMovies(id, data);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Movie has been updated", result);
    })
    .catch((err) => {
      if (err.message === "Internal server error") {
        helper.printError(res, 500, err.message);
      }
      helper.printError(res, 400, err.message);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  moviesModel
    .findMovies(id, "delete")
    .then((result) => {
      const image = result[0].image;
      removeImage(image);
      return moviesModel.deleteMovies(id);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Movie has been deleted", {});
    })
    .catch((err) => {
      if (err.message === "Internal server error") {
        helper.printError(res, 500, err.message);
      }
      helper.printError(res, 400, err.message);
    });
};

const removeImage = (filePath) => {
  filePath = path.join(__dirname, "../..", filePath);
  fs.unlink(filePath, (err) => new Error(err));
};
