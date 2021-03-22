const path = require("path");
const fs = require("fs");
const redis = require("redis");
const client = redis.createClient(6379);
const paymentsModel = require("../models/paymentsModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  paymentsModel
    .getAllPayments(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Payments not found");
          return;
        }
        client.setex(
          "getAllPayments",
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
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all payments successfully",
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

  const checkId = /^[0-9]+$/;
  if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  paymentsModel
    .getPaymentsById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot fine one payments with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Find one payments successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = (req, res) => {
  const { name } = req.body;
  let image;
  if (!req.file) {
    helper.printError(res, 400, "Image is required");
    return;
  } else {
    image = req.file.path;
  }

  if (!name || !image) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = {
    name,
    image,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  paymentsModel
    .createPayments(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating payments");
        return;
      }
      helper.printSuccess(res, 200, "New payments has been created", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const { name } = req.body;

  if (!name) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  const data = {
    name,
  };

  paymentsModel
    .findPayments(id, "update")
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
      return paymentsModel.updatePayments(id, data);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Payments has been updated", result);
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

  paymentsModel
    .findPayments(id, "delete")
    .then((result) => {
      const image = result[0].image;
      removeImage(image);
      return paymentsModel.deletePayments(id);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Payments has been deleted", {});
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
