const connection = require('../configs/dbConfig');

exports.getAllTickets = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id)', (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.getTicketsById = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT tickets.id, movies.title AS movies, cinemas.name AS cinema, tickets.day, tickets.date, tickets.time, tickets.row, tickets.seat, tickets.qty, tickets.createdAt, tickets.updatedAt FROM ((tickets INNER JOIN movies ON tickets.idMovie = movies.id) INNER JOIN cinemas ON tickets.idCinema = cinemas.id) WHERE tickets.id = ?', id, (err, result) => {
			if (!err) {
				resolve(result);
			} else {
				reject(err);
			}
		});
	});
};

exports.createTickets = (data) => {
	return new Promise((resolve, reject) => {
		connection.query('INSERT INTO tickets SET ?', data, (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM tickets WHERE id = ?", result.insertId, (err, result) => {
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

exports.updateTickets = (id, data) => {
	return new Promise((resolve, reject) => {
		connection.query('UPDATE tickets SET ? WHERE id = ?', [data, id], (err, result) => {
			if (!err) {
				connection.query("SELECT * FROM tickets WHERE id = ?", id, (err, result) => {
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

exports.deleteTickets = (id) => {
	return new Promise((resolve, reject) => {
		connection.query('DELETE FROM tickets WHERE id = ?', id, (err, result) => {
			if (!err) {
				resolve(result)
			} else {
				reject(err)
			}
		});
	});
};