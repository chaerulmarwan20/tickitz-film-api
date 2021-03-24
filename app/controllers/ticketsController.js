const redis = require("redis");
const port = process.env.REDIS_PORT;
const client = redis.createClient(port);
const ticketsModel = require("../models/ticketsModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  ticketsModel
    .getAllTickets(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Tickets not found");
          return;
        }
        client.setex(
          "getAllTickets",
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
            message: "Find all tickets successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all tickets successfully",
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

exports.findOne = (req, res) => {
  const id = req.params.id;
  const url = req.originalUrl;

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  ticketsModel
    .getTicketsById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one tickets with id = ${id}`);
        return;
      }
      client.setex(
        "getTicketsById",
        60 * 60 * 12,
        JSON.stringify({
          result,
          url,
          message: "Find one tickets successfully",
        })
      );
      helper.printSuccess(res, 200, "Find one tickets successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = async (req, res) => {
  const { day, row, seat, price, qty, idMovie, idCinema } = req.body;

  if (!day || !row || !seat || !price || !qty || !idMovie || !idCinema) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  let titleMovie;
  try {
    const getTitle = await ticketsModel.getMovieTitle(idMovie);
    const getCinema = await ticketsModel.getCinema(idCinema);
    if (getTitle < 1 || getCinema < 1) {
      helper.printError(res, 400, "Id movie or cinema not found!");
      return;
    }
    titleMovie = getTitle[0].title;
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    movieTitle: titleMovie,
    day,
    row,
    seat,
    price,
    qty,
    idMovie,
    idCinema,
    date: new Date(),
    time: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  ticketsModel
    .createTickets(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating movies");
        return;
      }
      helper.printSuccess(res, 200, "New movies has been created", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const { day, row, seat, price, qty, idMovie, idCinema } = req.body;

  if (!day || !row || !seat || !price || !qty || !idMovie || !idCinema) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  let titleMovie;
  try {
    const getTitle = await ticketsModel.getMovieTitle(idMovie);
    const getCinema = await ticketsModel.getCinema(idCinema);
    if (getTitle < 1 || getCinema < 1) {
      helper.printError(res, 400, "Id movie or cinema not found!");
      return;
    }
    titleMovie = getTitle[0].title;
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    movieTitle: titleMovie,
    day,
    row,
    seat,
    price,
    qty,
    idMovie,
    idCinema,
  };

  ticketsModel
    .updateTickets(id, data)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot update tickets with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Tickets has been updated", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  ticketsModel
    .deleteTickets(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, `Cannot delete tickets with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Tickets has been deleted", {});
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};
