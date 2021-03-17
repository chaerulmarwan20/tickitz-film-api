const connection = require("../configs/dbConfig");
const md5 = require("md5");
const helper = require("../helpers/printHelper");
const jwt = require("jsonwebtoken");
const config = require("../configs/secret");
const ip = require("ip");

exports.register = function (req, res) {
  let post = {
    fullName: req.body.fullName,
    image: "default.jpg",
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  connection.query(
    "SELECT email from users WHERE email = ?",
    post.email,
    function (err, result) {
      if (err) {
        helper.printError(res, 500, "Internal server error");
      } else {
        if (result.length == 0) {
          connection.query(
            "INSERT INTO users SET ?",
            post,
            function (err, result) {
              if (err) {
                helper.printError(res, 500, "Internal server error");
              } else {
                helper.printSuccess(
                  res,
                  200,
                  "New users has been created",
                  post
                );
              }
            }
          );
        } else {
          helper.printError(res, 400, "Email has been registered");
        }
      }
    }
  );
};

exports.login = function (req, res) {
  let post = {
    email: req.body.email,
    password: req.body.password,
  };

  connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [post.email, md5(post.password)],
    function (err, result) {
      if (err) {
        helper.printError(res, 500, "Internal server error");
      } else {
        if (result.length == 1) {
          let token = jwt.sign({ result }, config.secret, {
            expiresIn: 1440,
          });
          let idUser = result[0].id;

          let data = {
            idUser: idUser,
            access_token: token,
            ip_address: ip.address(),
          };

          connection.query(
            "INSERT INTO access_token SET ?",
            data,
            function (err, result) {
              if (err) {
                helper.printError(res, 500, "Internal server error");
              } else {
                res.status(200).json({
                  status: true,
                  message: "Token generated",
                  token: token,
                  currentUser: data.idUser,
                });
              }
            }
          );
        } else {
          helper.printError(res, 400, "Wrong email or password");
        }
      }
    }
  );
};

exports.success = function (req, res) {
  res.status(200).json({
    status: true,
    message: "Login successfull",
  });
};
