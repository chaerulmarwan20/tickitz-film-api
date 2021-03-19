const jwt = require("jsonwebtoken");
const ip = require("ip");
const usersModel = require("../models/usersModel");
const helper = require("../helpers/printHelper");
const hash = require("../helpers/hashPassword");
const secretKey = process.env.SECRET_KEY;

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  usersModel
    .getAllUsers(page, perPage, keyword, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Users not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all users successfully",
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

  usersModel
    .getUsersById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one users with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Find one users successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = async (req, res) => {
  if (!req.file) {
    helper.printError(res, 422, "Image is required");
    return;
  }

  const {
    firstName,
    lastName,
    phoneNumber,
    username,
    email,
    password,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !username ||
    !email ||
    !password
  ) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
    image: req.file.path,
    phoneNumber,
    username,
    email,
    password: await hash.hashPassword(password),
    role: 2,
    moviegoers: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  usersModel
    .createUsers(data)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating users");
        return;
      }
      delete result[0].password;
      helper.printSuccess(res, 200, "New users has been created", result);
    })
    .catch((err) => {
      if (err.message === "Email has been registered") {
        helper.printError(res, 400, err.message);
      } else {
        helper.printError(res, 500, err.message);
      }
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const {
    firstName,
    lastName,
    phoneNumber,
    username,
    email,
    password,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !username ||
    !email ||
    !password
  ) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  } else if (id.match(checkId) == null) {
    helper.printError(res, 400, "Provide a valid id!");
    return;
  }

  const data = {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
    image: "default.jpg",
    phoneNumber,
    username,
    email,
    password: await hash.hashPassword(password),
    role: 2,
    moviegoers: false,
  };

  usersModel
    .updateUsers(id, data)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot update users with id = ${id}`);
        return;
      }
      delete result[0].password;
      helper.printSuccess(res, 200, "Users has been updated", result);
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

  usersModel
    .deleteUsers(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, `Cannot delete users with id = ${id}`);
        return;
      }
      helper.printSuccess(res, 200, "Users has been deleted", {});
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = {
    email,
    password,
  };

  usersModel
    .login(data)
    .then((result) => {
      delete result.password;
      delete result.createdAt;
      delete result.updatedAt;
      const payload = {
        id: result.id,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        fullName: result.fullName,
        phoneNumber: result.phoneNumber,
        role: result.role,
      };
      jwt.sign(payload, secretKey, { expiresIn: 1440 }, async (err, token) => {
        result.token = token;
        const data = {
          idUser: result.id,
          accessToken: token,
          ipAddress: ip.address(),
        };
        await usersModel.createToken(data);
        helper.printSuccess(res, 200, "Login successfull", result);
      });
    })
    .catch((err) => {
      if (err.message === "Wrong email" || err.message === "Wrong password") {
        helper.printError(res, 400, err.message);
      } else {
        helper.printError(res, 500, err.message);
      }
    });
};

exports.success = (req, res) => {
  helper.printSuccess(res, 200, "Successfull", req.auth);
};

exports.moviegoers = (req, res) => {
  const email = req.body.email;

  if (!email) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  usersModel
    .moviegoers(email)
    .then((result) => {
      if (result < 1) {
        helper.printError(
          res,
          400,
          `Cannot be moviegoers with email = ${email}`
        );
        return;
      }
      helper.printSuccess(res, 200, "Your account has been moviegoers", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};
