const jwt = require("jsonwebtoken");
const ip = require("ip");
const usersModel = require("../models/usersModel");
const secretKey = process.env.SECRET_KEY;

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, { expiresIn: "24h" }, async (err, token) => {
      if (!err) {
        const data = {
          idUser: payload.id,
          accessToken: token,
          ipAddress: ip.address(),
        };
        await usersModel.createToken(data);
        resolve(token);
      } else {
        reject(err);
      }
    });
  });
};

const generateRefreshToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, { expiresIn: "7d" }, async (err, token) => {
      if (!err) {
        const data = {
          idUser: payload.id,
          accessToken: token,
          ipAddress: ip.address(),
        };
        await usersModel.createToken(data);
        resolve(token);
      } else {
        reject(err);
      }
    });
  });
};

const verifyRefreshToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        if (err.name === "JsonWebTokenError") {
          reject(new Error("Invalid signature refresh token"));
        } else if (err.name === "TokenExpiredError") {
          reject(new Error("Refresh token is expired"));
        } else {
          reject(new Error("Refresh token is not active"));
        }
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
};
