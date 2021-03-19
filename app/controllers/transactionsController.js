const transactionsModel = require("../models/transactionsModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  transactionsModel
    .getAllTransactions(page, perPage, keyword, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Transactions not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all transactions successfully",
        totalData,
        totalPage,
        result,
        page,
        perPage
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findAllSuccessed = (req, res) => {
  const { page, perPage } = req.query;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  transactionsModel
    .getTransactionsSuccessed(page, perPage, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Transactions successed not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all transactions successed successfully",
        totalData,
        totalPage,
        result,
        page,
        perPage
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

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
  const { paymentMethod, idUser, idTicket, qty, total } = req.body;

  if (!paymentMethod || !idUser || !idTicket || !qty || !total) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  try {
    const getUser = await transactionsModel.getUser(idUser);
    const getTicket = await transactionsModel.getTicket(idTicket);
    if (getTicket < 1 || getUser < 1) {
      helper.printError(res, 400, "Id user or ticket not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    date: new Date(),
    paymentMethod,
    idUser,
    idTicket,
    qty,
    total,
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  transactionsModel
    .createTransactions(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating transactions");
        return;
      }
      helper.printSuccess(
        res,
        200,
        "New transactions has been created",
        result
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const { paymentMethod, idUser, idTicket, qty, total, status } = req.body;

  if (!paymentMethod || !idUser || !idTicket || !qty || !total || !status) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  try {
    const getUser = await transactionsModel.getUser(idUser);
    const getTicket = await transactionsModel.getTicket(idTicket);
    if (getTicket < 1 || getUser < 1) {
      helper.printError(res, 400, "Id user or ticket not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    paymentMethod,
    idUser,
    idTicket,
    qty,
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

exports.search = (req, res) => {
  const { page, perPage, from, to } = req.query;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  transactionsModel
    .search(page, perPage, from, to, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Transactions not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        `Find transactions from ${from} to ${to} successfully`,
        totalData,
        totalPage,
        result,
        page,
        perPage
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findUsersTransactions = (req, res) => {
  const id = req.params.id;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  transactionsModel
    .getTransactionsUsers(id, sortBy, order)
    .then((result) => {
      if (result < 1) {
        helper.printError(
          res,
          400,
          `Cannot find one transactions users with id = ${id}`
        );
        return;
      }
      helper.printSuccess(
        res,
        200,
        "Find one transactions users successfully",
        result
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};
