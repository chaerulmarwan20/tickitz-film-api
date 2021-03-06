const connection = require('../configs/dbConfig');

exports.getAllCities = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM cities', (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.getCitiesById = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM cities WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.createCities = (data) => {
	return new Promise((resolve, reject) => {
		connection.query('INSERT INTO cities SET ?', data, (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM cities WHERE id = ?", result.insertId, (err, result) => {
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

exports.updateCities = (id, data) => {
	return new Promise((resolve, reject) => {
		connection.query('UPDATE cities SET ? WHERE id = ?', [data, id], (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM cities WHERE id = ?", id, (err, result) => {
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

exports.deleteCities = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('DELETE FROM cities WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result)
			} else {
				reject(err)
			}
		});
	});
};

exports.searchCities = (keyword) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM cities WHERE name LIKE ?', keyword, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};