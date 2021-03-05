const connection = require('../configs/dbConfig');

exports.getAllTransactions = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id)', (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.getTransactionsById = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT transactions.id, transactions.date AS dateTransactions, transactions.paymentMethod, users.fullName, users.username, tickets.movieTitle, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.price, transactions.qty, transactions.total FROM ((transactions INNER JOIN users ON transactions.idUser = users.id) INNER JOIN tickets ON transactions.idTicket = tickets.id) WHERE transactions.id = ?', id, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.createTransactions = (data) => {
	return new Promise((resolve, reject) => {
		connection.query('INSERT INTO transactions SET ?', data, (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM transactions WHERE id = ?", result.insertId, (err, result) => {
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

exports.updateTransactions = (id, data) => {
	return new Promise((resolve, reject) => {
		connection.query('UPDATE transactions SET ? WHERE id = ?', [data, id], (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM transactions WHERE id = ?", id, (err, result) => {
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

exports.deleteTransactions = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('DELETE FROM transactions WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};