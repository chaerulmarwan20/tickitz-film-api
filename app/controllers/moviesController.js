const moviesModel = require('../models/moviesModel');
const helper = require('../helpers/printHelper');

exports.findAll = (req, res) => {
	const keyword = req.query.keyword ? req.query.keyword : null;
	const queryPage = req.query.page;
	const queryPerPage = req.query.perPage;
	moviesModel.getAllMovies(queryPage, queryPerPage, keyword)
		.then(([totalData, totalPage, result, page, perPage]) => {
			if (result < 1) {
				throw new Error('Movies not found');
			}
			res.status(200).json({
				status: true,
				message: 'Find movies successfully',
				totalData,
				totalPage,
				data: result,
				currentPage: page,
				perPage
			});
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.findAllRealesed = (req, res) => {
	moviesModel.getMoviesRealesed()
		.then((result) => {
			if (result < 1) {
				throw new Error('Movies released not found');
			}
			helper.print(res, 200, 'Find all movies realesed successfully', result);
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
			status: false,
			message: "Provide an id!"
		});
		return;
	}

	moviesModel.getMoviesById(id)
		.then((result) => {
			if (result < 1) {
				throw new Error(`Error find one movies with id = ${id}`);
			}
			helper.print(res, 200, 'Find one movies successfully', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.create = (req, res) => {
	const {title, genre, duration, director, cast, synopsis, rating, realesed} = req.body;

	if (!title || !genre || !duration || !director || !cast || !synopsis || !rating) {
		res.status(400).send({
			status: false,
			message: "Content cannot be empty"
		});
		return;
	}

	const data = {
		title,
		genre,
		duration,
		director,
		cast,
		synopsis,
		rating,
		realesed: realesed ? realesed : false,
		createdAt: new Date(),
		updatedAt: new Date()
	}

	moviesModel.createMovies(data)
		.then((result) => {
			if (result.affectedRows == 0) {
				throw new Error(`Error creating movies`);
			}
			helper.print(res, 200, 'New movies has been created', result);
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	const checkId = /^[0-9]+$/;

	const {title, genre, duration, director, cast, synopsis, rating, realesed} = req.body;

	if (!title || !genre || !duration || !director || !cast || !synopsis || !rating) {
		res.status(400).send({
			status: false,
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
		title,
		genre,
		duration,
		director,
		cast,
		synopsis,
		rating,
		realesed: realesed ? realesed : false
	}

	moviesModel.updateMovies(id, data)
		.then((result) => {
			if (result == 0) {
				throw new Error(`Cannot update movies with id = ${id}`);
			} else {
				helper.print(res, 200, 'Movies has been updated', result);
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
			status: false,
			message: "Provide an id!"
		});
		return;
	}

	moviesModel.deleteMovies(id)
		.then((result) => {
			if (result.affectedRows == 0) {
				throw new Error(`Cannot delete movies with id = ${id}`);
			}
			helper.print(res, 200, 'Movies has been deleted', {});
		})
		.catch((err) => {
			helper.print(res, 500, err.message, {});
		});
}