const port = process.env.REDIS_PORT;
const redis = require("redis");
const client = redis.createClient(port);
const helper = require("../helpers/printHelper");

const cacheAllData = (params) => {
  return function (req, res, next) {
    const url = req.originalUrl;
    client.get(params, (err, data) => {
      if (data !== null) {
        const allData = JSON.parse(data);
        if (allData.url === url) {
          const {
            totalData,
            totalPage,
            result,
            page,
            perPage,
            previousPage,
            nextPage,
            message,
          } = allData;
          helper.printPaginate(
            res,
            200,
            message,
            totalData,
            totalPage,
            result,
            page,
            perPage,
            previousPage,
            nextPage
          );
          return;
        } else {
          next();
        }
      } else {
        next();
      }
    });
  };
};

const cacheOneData = (params) => {
  return function (req, res, next) {
    const url = req.originalUrl;
    client.get(params, (err, data) => {
      if (data !== null) {
        const oneData = JSON.parse(data);
        if (oneData.url === url) {
          const { result, message } = oneData;
          helper.printSuccess(res, 200, message, result);
          return;
        } else {
          next();
        }
      } else {
        next();
      }
    });
  };
};

module.exports = {
  allData: cacheAllData,
  oneData: cacheOneData,
};
