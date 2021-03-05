const cinemasModel = require('../models/cinemasModel');
const helper = require('../helpers/printHelper');

exports.findAll = (req, res) => {
	cinemasModel.getAllCinemas()
		.then((result) => {
			if (result < 1) {
				throw new Error('Cinemas not found');
			}
			helper.print(res, 200, 'Find all cinemas successfully', result);
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

	cinemasModel.getCinemasById(id)
		.then((result) => {
			if (result < 1) {
				throw new Error(`Error find one cinemas with id = ${id}`);
			}
			helper.print(res, 200, 'Find one cinemas successfully', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.create = (req, res) => {
	const {name, address, idCity} = req.body;

	if (!name || !address || !idCity) {
		res.status(400).send({
			message: "Content cannot be empty"
		});
		return;
	}

	const data = {
		name,
		address,
		idCity,
		createdAt: new Date(),
		updatedAt: new Date()
	}

	cinemasModel.createCinemas(data)
		.then((result) => {
			if (result.affectedRows == 0) {
				throw new Error(`Error creating cinemas`);
			}
			helper.print(res, 200, 'New cinemas has been created', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	const checkId = /^[0-9]+$/;

	const {name, address, idCity} = req.body;

	if (!name || !address || !idCity) {
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
		name,
		address,
		idCity
	}

	cinemasModel.updateCinemas(id, data)
		.then((result) => {
			if (result == 0) {
				throw new Error(`Cannot update cinemas with id = ${id}`);
			} else {
				helper.print(res, 200, 'Cinemas has been updated', result);
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

	cinemasModel.deleteCinemas(id)
		.then((result) => {
			if (result.affectedRows == 0) {
				throw new Error(`Cannot delete cinemas with id = ${id}`);
			}
			helper.print(res, 200, 'Cinemas has been deleted', {});
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
}