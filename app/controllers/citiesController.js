const redis = require("redis");
const client = redis.createClient(6379);
const citiesModel = require("../models/citiesModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  citiesModel
    .getAllCities(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Cities not found");
          return;
        }
        client.setex(
          "getAllCities",
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
            message: "Find all cities successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all cities successfully",
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

  citiesModel
    .getCitiesById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one cities with id = ${id}`);
        return;
      }
      client.setex(
        "getCitiesById",
        60 * 60 * 12,
        JSON.stringify({
          result,
          url,
          message: "Find one cities successfully",
        })
      );
      helper.printSuccess(res, 200, "Find one cities successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = (req, res) => {
  const { name } = req.body;

  if (!name) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = {
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  citiesModel
    .createCities(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating cities");
        return;
      }
      helper.printSuccess(res, 200, "New cities has been created", result);
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

  citiesModel
    .updateCities(id, data)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot update cities with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Cities has been updated", result);
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

  citiesModel
    .deleteCities(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, `Cannot delete cities with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Cities has been deleted", {});
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};
