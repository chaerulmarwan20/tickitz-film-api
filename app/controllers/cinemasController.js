const path = require("path");
const fs = require("fs");
const redis = require("redis");
const client = redis.createClient(6379);
const cinemasModel = require("../models/cinemasModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  cinemasModel
    .getAllCinemas(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Cinemas not found");
          return;
        }
        client.setex(
          "getAllCinemas",
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
            message: "Find all cinemas successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all cinemas successfully",
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

  cinemasModel
    .getCinemasById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot fine one cinemas with id = ${id}`);
        return;
      }
      client.setex(
        "getCinemasById",
        60 * 60 * 12,
        JSON.stringify({
          result,
          url,
          message: "Find one cinemas successfully",
        })
      );
      helper.printSuccess(res, 200, "Find one cinemas successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = async (req, res) => {
  const { name, address, idCity } = req.body;
  let image;
  if (!req.file) {
    helper.printError(res, 400, "Image is required");
    return;
  } else {
    image = req.file.path;
  }

  if (!name || !image || !address || !idCity) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  try {
    const getCity = await cinemasModel.getCity(idCity);
    if (getCity < 1) {
      helper.printError(res, 400, "Id city not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    name,
    image,
    address,
    idCity,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  cinemasModel
    .createCinemas(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating cinemas");
        return;
      }
      helper.printSuccess(res, 200, "New cinemas has been created", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const { name, address, idCity } = req.body;

  if (!name || !address || !idCity) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  try {
    const getCity = await cinemasModel.getCity(idCity);
    if (getCity < 1) {
      helper.printError(res, 400, "Id city not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    name,
    address,
    idCity,
  };

  cinemasModel
    .findCinemas(id, "update")
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
      return cinemasModel.updateCinemas(id, data);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Cinemas has been updated", result);
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

  cinemasModel
    .findCinemas(id, "delete")
    .then((result) => {
      const image = result[0].image;
      removeImage(image);
      return cinemasModel.deleteCinemas(id);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Cinemas has been deleted", {});
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
