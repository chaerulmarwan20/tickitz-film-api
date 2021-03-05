const connection = require('../configs/dbConfig');

exports.getAllUsers = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM users', (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.getUsersById = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.createUsers = (data) => {
	return new Promise((resolve, reject) => {
		connection.query('INSERT INTO users SET ?', data, (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM users WHERE id = ?", result.insertId, (err, result) => {
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

exports.updateUsers = (id, data) => {
	return new Promise((resolve, reject) => {
		connection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
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

exports.deleteUsers = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result)
			} else {
				reject(err)
			}
		});
	});
};