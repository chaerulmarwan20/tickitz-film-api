const transactionsModel = require('../models/transactionsModel');
const helper = require('../helpers/printHelper');

exports.findAll = (req, res) => {
	transactionsModel.getAllTransactions()
		.then((result) => {
			if (result < 1) {
				throw new Error('Transactions not found');
			}
			helper.print(res, 200, 'Find all transactions successfully', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;

	const checkId = /^[0-9]+$/;
	if (id.match(checkId) == null) {
		res.status(400).send({
			message: "Provide an id!"
		});
		return;
	}

	transactionsModel.getTransactionsById(id)
		.then((result) => {
			if (result < 1) {
				throw new Error(`Error find one transactions with id = ${id}`);
			}
			helper.print(res, 200, 'Find one transactions successfully', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.create = (req, res) => {
	const {paymentMethod, idUser, idTicket, qty, total} = req.body;

	if (!paymentMethod || !idUser || !idTicket || !qty || !total) {
		res.status(400).send({
			message: "Content cannot be empty"
		});
		return;
	}

	const data = {
		date: new Date(),
		paymentMethod,
		idUser,
		idTicket,
		qty,
		total,
		status: 'PENDING',
		createdAt: new Date(),
		updatedAt: new Date()
	}

	transactionsModel.createTransactions(data)
		.then((result) => {
			if (result.affectedRows == 0) {
				throw new Error(`Error creating transactions`);
			}
			helper.print(res, 200, 'New transactions has been created', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	const checkId = /^[0-9]+$/;

	const {paymentMethod, idUser, idTicket, qty, total, status} = req.body;

	if (!paymentMethod || !idUser || !idTicket || !qty || !total || !status) {
		res.status(400).send({
			message: "Content cannot be empty"
		});
		return;
	} else if (id.match(checkId) == null) {
		res.status(400).send({
			message: "Provide an id!"
		});
		return;
	}

	const data = {
		paymentMethod,
		idUser,
		idTicket,
		qty,
		total,
		status,
	}

	transactionsModel.updateTransactions(id, data)
		.then((result) => {
			if (result == 0) {
				throw new Error(`Cannot update transactions with id = ${id}`);
			} else {
				helper.print(res, 200, 'Transactions has been updated', result);
			}
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	const checkId = /^[0-9]+$/;
	if (id.match(checkId) == null) {
		res.status(400).send({
			message: "Provide an id!"
		});
		return;
	}

	transactionsModel.deleteTransactions(id)
		.then((result) => {
			if (result.affectedRows == 0) {
				throw new Error(`Cannot delete transactions with id = ${id}`);
			}
			helper.print(res, 200, 'Transactions has been deleted', {});
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
}