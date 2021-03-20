const host = process.env.HOST;
const port = process.env.PORT;
const link = `http://${host}:${port}`;

exports.link = (page, perPage, totalPage, keyword, sortBy, order, menu) => {
  let previousPage, nextPage;
  if ((keyword === "" && sortBy === "id" && order === "ASC") || "asc") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${page + 1}&perPage=${perPage}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}`;
        nextPage = `${link}/v1/${menu}/?page=${page + 1}&perPage=${perPage}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}`;
        nextPage = null;
      }
    }
  } else if (keyword !== "" && sortBy === "id" && order === "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}`;
        nextPage = null;
      }
    }
  } else if (keyword !== "" && sortBy !== "id" && order === "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}`;
        nextPage = null;
      }
    }
  } else if (keyword !== "" && sortBy === "id" && order !== "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}&order=${order}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}&order=${order}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}&order=${order}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}&order=${order}`;
        nextPage = null;
      }
    }
  } else if (keyword !== "" && sortBy !== "id" && order !== "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}&order=${order}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}&order=${order}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}&order=${order}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}&order=${order}`;
        nextPage = null;
      }
    }
  } else if (keyword === "" && sortBy !== "id" && order === "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&sortBy=${sortBy}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&sortBy=${sortBy}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&sortBy=${sortBy}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&sortBy=${sortBy}`;
        nextPage = null;
      }
    }
  } else if (keyword === "" && sortBy === "id" && order !== "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&order=${order}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&order=${order}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&order=${order}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&order=${order}`;
        nextPage = null;
      }
    }
  } else if (keyword === "" && sortBy !== "id" && order !== "ASC") {
    if (page < totalPage) {
      if (page === 1) {
        previousPage = null;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&sortBy=${sortBy}&order=${order}`;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&sortBy=${sortBy}&order=${order}`;
        nextPage = `${link}/v1/${menu}/?page=${
          page + 1
        }&perPage=${perPage}&sortBy=${sortBy}&order=${order}`;
      }
    } else if (page === totalPage) {
      if (page === 1 && totalPage === 1) {
        previousPage = null;
        nextPage = null;
      } else {
        previousPage = `${link}/v1/${menu}/?page=${
          page - 1
        }&perPage=${perPage}&sortBy=${sortBy}&order=${order}`;
        nextPage = null;
      }
    }
  }
  return [previousPage, nextPage];
};
