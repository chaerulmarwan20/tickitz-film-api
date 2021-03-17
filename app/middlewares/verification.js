const jwt = require('jsonwebtoken');
const helper = require("../helpers/printHelper");
const config = require('../configs/secret');

const verification = () => {
  return function (req, res, next) {
    let role = req.body.role;

    let tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      let token = tokenWithBearer.split(' ')[1];
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          helper.printError(res, 401, "Token not registered");
        } else {
          if (role == 2) {
            req.auth = decoded;
            next()
          } else {
            helper.printError(res, 401, "Failed authorization your account");
          }
        }
      })
    } else {
      helper.printError(res, 401, "Token not available");
    }
  }
}

module.exports = verification;