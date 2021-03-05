const connection = require('../configs/dbConfig');

exports.getAllMovies = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM movies', (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
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