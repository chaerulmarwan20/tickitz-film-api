const redis = require("redis");
const client = redis.createClient(6379);
const helper = require("../helpers/printHelper");

const cacheAllUsers = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllUsers", (err, data) => {
    if (data !== null) {
      const users = JSON.parse(data);
      if (users.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = users;
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
        return;
      } else {
        next();
      }
    } else {
      next();
    }
  });
};

const cacheAllCinemas = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllCinemas", (err, data) => {
    if (data !== null) {
      const cinemas = JSON.parse(data);
      if (cinemas.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = cinemas;
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
        return;
      } else {
        next();
      }
    } else {
      next();
    }
  });
};

const cacheAllCities = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllCities", (err, data) => {
    if (data !== null) {
      const cities = JSON.parse(data);
      if (cities.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = cities;
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
        return;
      } else {
        next();
      }
    } else {
      next();
    }
  });
};

const cacheAllMovies = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllMovies", (err, data) => {
    if (data !== null) {
      const movies = JSON.parse(data);
      if (movies.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = movies;
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
        return;
      } else {
        next();
      }
    } else {
      next();
    }
  });
};

const cacheAllPayments = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllPayments", (err, data) => {
    if (data !== null) {
      const payments = JSON.parse(data);
      if (payments.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = payments;
        helper.printPaginate(
          res,
          200,
          "Find all payments successfully",
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

const cacheAllTickets = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllTickets", (err, data) => {
    if (data !== null) {
      const tickets = JSON.parse(data);
      if (tickets.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = tickets;
        helper.printPaginate(
          res,
          200,
          "Find all tickets successfully",
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

const cacheAllTransactions = (req, res, next) => {
  const url = req.originalUrl;
  client.get("getAllTransactions", (err, data) => {
    if (data !== null) {
      const transactions = JSON.parse(data);
      if (transactions.url === url) {
        const {
          totalData,
          totalPage,
          result,
          page,
          perPage,
          previousPage,
          nextPage,
        } = transactions;
        helper.printPaginate(
          res,
          200,
          "Find all transactions successfully",
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

module.exports = {
  allUsers: cacheAllUsers,
  allCinemas: cacheAllCinemas,
  allCities: cacheAllCities,
  allMovies: cacheAllMovies,
  allPayments: cacheAllPayments,
  allTickets: cacheAllTickets,
  allTransactions: cacheAllTransactions,
};
