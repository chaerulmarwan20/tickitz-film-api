const jwt = require("jsonwebtoken");
const ip = require("ip");
const path = require("path");
const fs = require("fs");
const redis = require("redis");
const port = process.env.REDIS_PORT;
const client = redis.createClient(port);
const usersModel = require("../models/usersModel");
const helper = require("../helpers/printHelper");
const mail = require("../helpers/sendEmail");
const hash = require("../helpers/hashPassword");
const secretKey = process.env.SECRET_KEY;

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";
  const url = req.originalUrl;
  usersModel
    .getAllUsers(page, perPage, keyword, sortBy, order)
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
          helper.printError(res, 400, "Users not found");
          return;
        }
        for (let i = 0; i < perPage; i++) {
          if (result[i] === undefined) {
            break;
          } else {
            delete result[i].password;
          }
        }
        client.setex(
          "getAllUsers",
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
            message: "Find all users successfully",
          })
        );
        helper.printPaginate(
          res,
          200,
          "Find all users successfully",
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

  usersModel
    .getUsersById(id)
    .then((result) => {
      if (result < 1) {
        helper.printError(res, 400, `Cannot find one users with id = ${id}`);
        return;
      }
      client.setex(
        "getUsersById",
        60 * 60 * 12,
        JSON.stringify({
          result,
          url,
          message: "Find one users successfully",
        })
      );
      helper.printSuccess(res, 200, "Find one users successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = async (req, res) => {
  let image;
  if (!req.file) {
    image = "images\\avatar.png";
  } else {
    image = req.file.path;
  }

  const { firstName, lastName, phoneNumber, email, password } = req.body;

  if (!firstName || !lastName || !phoneNumber || !email || !password) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
    image,
    phoneNumber,
    email,
    password: await hash.hashPassword(password),
    role: 2,
    moviegoers: false,
    active: false,
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
      const payload = {
        id: result[0].id,
        email: result[0].email,
        firstName: result[0].firstName,
        lastName: result[0].lastName,
        fullName: result[0].fullName,
        phoneNumber: result[0].phoneNumber,
        role: result[0].role,
      };
      jwt.sign(payload, secretKey, { expiresIn: "24h" }, async (err, token) => {
        const data = {
          email: result[0].email,
          token: token,
          createdAt: new Date(),
        };
        await usersModel.createUsersToken(data);
        await mail.send(result[0].email, token, "verify");
        helper.printSuccess(
          res,
          200,
          "Your account has been created, please check your email to activate your account",
          result
        );
      });
    })
    .catch((err) => {
      if (err.message === "Email has been registered") {
        helper.printError(res, 400, err.message);
      } else {
        helper.printError(res, 500, err.message);
      }
    });
};

exports.verify = async (req, res) => {
  const email = req.query.email;
  const token = req.query.token;

  try {
    const user = await usersModel.findEmail(email);
    if (user < 1) {
      helper.printError(res, 400, "Email is not valid!");
      return;
    } else {
      try {
        const userToken = await usersModel.findToken(token);
        if (userToken < 1) {
          helper.printError(res, 400, "Token is not valid!");
          return;
        } else {
          jwt.verify(token, secretKey, async (err, decoded) => {
            if (err) {
              if (err.name === "JsonWebTokenError") {
                helper.printError(res, 401, "Invalid signature");
              } else if (err.name === "TokenExpiredError") {
                await usersModel.deleteEmail(email);
                await usersModel.deleteToken(email);
                helper.printError(res, 401, "Token is expired");
              } else {
                helper.printError(res, 401, "Token is not active");
              }
            } else {
              await usersModel.setActive(email);
              await usersModel.deleteToken(email);
              helper.printSuccess(
                res,
                200,
                `${email} has been activated, please login!`,
                decoded
              );
            }
          });
        }
      } catch (err) {
        helper.printError(res, 500, err.message);
      }
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const checkId = /^[0-9]+$/;

  const { firstName, lastName, phoneNumber, email, password } = req.body;

  if (!firstName || !lastName || !phoneNumber || !email) {
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
    phoneNumber,
    email,
  };

  try {
    const userPassword = await usersModel.checkPassword(password);
    if (userPassword.length < 1) {
      data.password = await hash.hashPassword(password);
    }
  } catch (err) {
    helper.printError(res, 400, err.message);
    return;
  }

  usersModel
    .findUser(id, "update")
    .then((result) => {
      let image;
      if (!req.file) {
        image = result[0].image;
      } else {
        const oldImage = result[0].image;
        if (oldImage !== "images\\avatar.png") {
          removeImage(oldImage);
        }
        image = req.file.path;
      }
      data.image = image;
      return usersModel.updateUsers(id, data);
    })
    .then((result) => {
      delete result[0].password;
      helper.printSuccess(res, 200, "Users has been updated", result);
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

  usersModel
    .findUser(id, "delete")
    .then((result) => {
      const image = result[0].image;
      if (image !== "images\\avatar.png") {
        removeImage(image);
      }
      return usersModel.deleteUsers(id);
    })
    .then((result) => {
      helper.printSuccess(res, 200, "Users has been deleted", {});
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
      jwt.sign(payload, secretKey, { expiresIn: "24h" }, async (err, token) => {
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

exports.checkEmail = (req, res) => {
  const email = req.body.email;

  if (!email) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = email;

  usersModel
    .findEmail(data)
    .then((result) => {
      if (result.length < 1) {
        helper.printError(res, 400, "Email is not registered!");
        return;
      }
      helper.printSuccess(
        res,
        200,
        "Please follow next step to reset your password!",
        result
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.forgotPassword = (req, res) => {
  const email = req.body.email;

  if (!email) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  const data = email;

  usersModel
    .findAccount(data)
    .then((result) => {
      if (result.length < 1) {
        helper.printError(res, 400, "Email is not registered or activated!");
        return;
      }
      delete result[0].password;
      const payload = {
        id: result[0].id,
        email: result[0].email,
        firstName: result[0].firstName,
        lastName: result[0].lastName,
        fullName: result[0].fullName,
        phoneNumber: result[0].phoneNumber,
        role: result[0].role,
      };
      jwt.sign(payload, secretKey, { expiresIn: "24h" }, async (err, token) => {
        const data = {
          email: result[0].email,
          token: token,
          createdAt: new Date(),
        };
        await usersModel.createUsersToken(data);
        await mail.send(result[0].email, token, "forgot");
        helper.printSuccess(
          res,
          200,
          "Please check your email to reset your password!",
          result
        );
      });
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.resetPassword = async (req, res) => {
  const email = req.query.email;
  const token = req.query.token;
  const password = req.body.password;

  try {
    const user = await usersModel.findEmail(email);
    if (user < 1) {
      helper.printError(res, 400, "Reset password failed! Wrong email.");
      return;
    } else {
      try {
        const userToken = await usersModel.findToken(token);
        if (userToken < 1) {
          helper.printError(res, 400, "Reset password failed! Wrong token.");
          return;
        } else {
          jwt.verify(token, secretKey, async (err, decoded) => {
            if (err) {
              if (err.name === "JsonWebTokenError") {
                helper.printError(res, 401, "Invalid signature");
              } else if (err.name === "TokenExpiredError") {
                await usersModel.deleteToken(email);
                helper.printError(res, 401, "Token is expired");
              } else {
                helper.printError(res, 401, "Token is not active");
              }
            } else {
              const data = await hash.hashPassword(password);
              await usersModel.setPassword(data, email);
              if (!data) {
                helper.printError(res, 400, "Content cannot be empty");
                return;
              }
              helper.printSuccess(
                res,
                200,
                "Password has been changed! Please login.",
                decoded
              );
            }
          });
        }
      } catch (err) {
        helper.printError(res, 500, err.message);
      }
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }
};

exports.moviegoers = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    helper.printError(res, 400, "Content cannot be empty");
    return;
  }

  try {
    const moviegoers = await usersModel.checkMoviegoers(email);
    if (moviegoers.length > 0) {
      helper.printError(res, 200, "Your account has become moviegoers");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
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
