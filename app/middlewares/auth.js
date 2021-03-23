const jwt = require("jsonwebtoken");
const helper = require("../helpers/printHelper");
const secretKey = process.env.SECRET_KEY;

exports.verification = () => {
  return function (req, res, next) {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.split(" ")[1];
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          if (err.name === "JsonWebTokenError") {
            helper.printError(res, 401, "Invalid signature");
          } else if (err.name === "TokenExpiredError") {
            helper.printError(res, 401, "Token is expired");
          } else {
            helper.printError(res, 401, "Token is not active");
          }
        } else {
          const role = decoded.role;
          if (role === 1) {
            req.auth = decoded;
            next();
          } else {
            helper.printError(res, 401, "Failed to authorize your role");
          }
        }
      });
    } else {
      helper.printError(res, 401, "Token is required");
    }
  };
};
