const path = require("path");
const fs = require("fs");
const moviesModel = require("../models/moviesModel");
const helper = require("../helpers/printHelper");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  moviesModel
    .getAllMovies(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Movies not found");
          return;
        }
        helper.printPaginate(
          res,
          200,
          "Find all movies successfully",
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

exports.findAllRealesed = (req, res) => {
  const { page, perPage, realese } = req.query;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  moviesModel
    .getMoviesRealesed(realese, page, perPage, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Movies realesed not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all movies realesed successfully",
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

  moviesModel
    .getMoviesById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one movies with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Find one movies successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = (req, res) => {
  const {
    title,
    genre,
    duration,
    director,
    cast,
    synopsis,
    rating,
    realesed,
  } = req.body;
  let image;
  if (!req.file) {
    helper.printError(res, 400, "Image is required");
    return;
  } else {
    image = req.file.path;
  }

  if (
    !title ||
    !image ||
    !genre ||
    !duration ||
    !director ||
    !cast ||
    !synopsis ||
    !rating
  ) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = {
    title,
    image,
    genre,
    duration,
    director,
    cast,
    synopsis,
    rating,
    realesed: realesed === "true" ? true : false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  moviesModel
    .createMovies(data)
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

exports.update = (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const {
    title,
    genre,
    duration,
    director,
    cast,
    synopsis,
    rating,
    realesed,
  } = req.body;

  if (
    !title ||
    !genre ||
    !duration ||
    !director ||
    !cast ||
    !synopsis ||
    !rating
  ) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
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
    rating,
    realesed: realesed === "true" ? true : false,
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
      helper.printSuccess(res, 200, "Movies has been updated", result);
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
      helper.printSuccess(res, 200, "Movies has been deleted", {});
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

exports.searchRealesed = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.body.keyword ? req.body.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  moviesModel
    .searchMoviesRealese(page, perPage, keyword, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Movies not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Search movies successfully",
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

exports.searchNotRealesed = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.body.keyword ? req.body.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  moviesModel
    .searchMoviesNotRealese(page, perPage, keyword, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Movies not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Search movies successfully",
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
