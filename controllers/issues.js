const Issue = require('../models/issue');

exports.createIssue = (req, res, next) => {
	const { title, description, creator, assignee, status } = req.body;

	const newIssue = new Issue({
		title,
		description,
		creator,
		assignee,
		status,
		open: true
	});

	newIssue.save(err => {
		if (err) return next(err);
	});

	res.render('index');
};
