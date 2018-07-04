const Issue = require('../models/issue');

exports.getMyPolls = (req, res, next) => {
	Issue.find({}, (err, issues) => {
		if (err) return next(err);

		res.render('issues', { issues });
	});
};
exports.createIssue = (req, res, next) => {
	var { project, title, description, creator, assignee, status } = req.body;

	if (assignee == null) {
		assignee = '';
	}
	if (status == null) {
		status = '';
	}

	const newIssue = new Issue({
		project,
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
