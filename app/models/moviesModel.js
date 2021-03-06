const connection = require('../configs/dbConfig');

exports.getAllMovies = (queryPage, queryPerPage) => {
	return new Promise((resolve, reject) => {
		connection.query("SELECT COUNT(*) AS totalData FROM movies", (err, result) => {
			let totalData;
			let page;
			let perPage;
			let totalPage;
			if (err) {
				reject(err);
			} else {
				totalData = result[0].totalData;
				page = queryPage ? parseInt(queryPage) : 1;
				perPage = queryPerPage ? parseInt(queryPerPage) : 5;
				totalPage = Math.ceil(totalData / perPage);
			}
			let firstData = (perPage * page) - perPage;
			connection.query("SELECT * FROM movies LIMIT ?, ?", [firstData, perPage], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve([totalData, totalPage, result, page, perPage]);
				}
			});
		});
	});
};

exports.getMoviesRealesed = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM movies WHERE realesed = true', (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.getMoviesById = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM movies WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.createMovies = (data) => {
	return new Promise((resolve, reject) => {
		connection.query('INSERT INTO movies SET ?', data, (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM movies WHERE id = ?", result.insertId, (err, result) => {
					if (!err) {
						resolve(result);
					} else {
						reject(err);
					}
				});
			} else {
				reject(err);
			}
		});
	});
};

exports.updateMovies = (id, data) => {
	return new Promise((resolve, reject) => {
		connection.query('UPDATE movies SET ? WHERE id = ?', [data, id], (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM movies WHERE id = ?", id, (err, result) => {
					if (!err) {
						resolve(result);
					} else {
						reject(err);
					}
				});
			} else {
				reject(err);
			}
		});
	});
};

exports.deleteMovies = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('DELETE FROM movies WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result)
			} else {
				reject(err)
			}
		});
	});
};