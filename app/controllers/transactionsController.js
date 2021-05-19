const redis = require("redis");
const port = process.env.REDIS_PORT;
const client = redis.createClient(port);
const transactionsModel = require("../models/transactionsModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  transactionsModel
    .getAllTransactions(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Transactions not found");
          return;
        }
        client.setex(
          "getAllTransactions",
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
            message: "Find all transactions successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all transactions successfully",
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

  transactionsModel
    .getTransactionsById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(
          res,
          400,
          `Cannot find one transactions with id = ${id}`
        );
        return;
      }
      client.setex(
        "getTransactionsById",
        60 * 60 * 12,
        JSON.stringify({
          result,
          url,
          message: "Find one transactions successfully",
        })
      );
      helper.printSuccess(
        res,
        200,
        "Find one transactions successfully",
        result
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = async (req, res) => {
  const {
    date,
    time,
    paymentMethod,
    idUser,
    idCinema,
    movieTitle,
    category,
    qty,
    seat,
    total,
    idSeat,
  } = req.body;

  const ticket = idSeat;
  const totalSeat = seat;

  if (
    !date ||
    !time ||
    !paymentMethod ||
    !idUser ||
    !idCinema ||
    !movieTitle ||
    !category ||
    !qty ||
    !seat ||
    !total ||
    !idSeat
  ) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  try {
    const getUser = await transactionsModel.getUser(idUser);
    const getCinema = await transactionsModel.getCinema(idCinema);
    if (getUser < 1 || getCinema < 1) {
      helper.printError(res, 400, "Id user or ticket or cinema not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  try {
    const moviegoers = await transactionsModel.checkMoviegoers(idUser);
    if (moviegoers.length > 0) {
      await transactionsModel.updatePoint(idUser, ticket);
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    date,
    time,
    paymentMethod,
    idUser,
    idCinema,
    movieTitle,
    category,
    qty,
    seat: totalSeat.join(", "),
    total,
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  transactionsModel
    .createTransactions(data)
    .then(async (result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating transactions");
        return;
      }
      const idTransactions = result[0].id;
      ticket.forEach((element) => {
        transactionsModel.updateTickets(element);
      });
      ticket.forEach((element) => {
        const detail = {
          idTransactions: idTransactions,
          idTicket: element,
        };
        transactionsModel.createDetailTransactions(detail);
      });
      helper.printSuccess(res, 200, "Order ticket success", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const {
    paymentMethod,
    idUser,
    idCinema,
    movieTitle,
    category,
    qty,
    seat,
    total,
    status,
  } = req.body;

  if (
    !paymentMethod ||
    !idUser ||
    !idCinema ||
    !movieTitle ||
    !category ||
    !qty ||
    !seat ||
    !total ||
    !status
  ) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  try {
    const getUser = await transactionsModel.getUser(idUser);
    const getCinema = await transactionsModel.getCinema(idCinema);
    if (getUser < 1 || getCinema < 1) {
      helper.printError(res, 400, "Id user or ticket or cinema not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    paymentMethod,
    idUser,
    idCinema,
    movieTitle,
    category,
    qty,
    seat,
    total,
    status,
  };

  transactionsModel
    .updateTransactions(id, data)
    .then((result) => {
      if (result < 1) {
        helper.printError(
          res,
          400,
          `Cannot update transactions with id = ${id}`
        );
        return;
      }
      helper.printSuccess(res, 200, "Transactions has been updated", result);
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

  transactionsModel
    .deleteTransactions(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(
          res,
          400,
          `Cannot delete transactions with id = ${id}`
        );
        return;
      }
      helper.printSuccess(res, 200, "Transactions has been deleted", {});
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findUsersTransactions = (req, res) => {
  const id = req.params.id;
  const { page, perPage } = req.query;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  transactionsModel
    .getTransactionsUsers(id, page, perPage, sortBy, order)
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
          helper.printError(
            res,
            400,
            `Cannot find transactions users with id = ${id}`
          );
          return;
        }
        client.setex(
          "getAllTransactionsUsers",
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
            message: "Find all transactions users successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all transactions users successfully",
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
