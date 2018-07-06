const Issue = require('../models/issue');

exports.getIssues = (req, res, next) => {
	const { project, filter } = req.query;
	let dbIssues = [];

	Issue.find({}, (err, issues) => {
		if (err) {
			return next(err);
		}
		if (project == 'All') {
			if (filter == 'on') {
				dbIssues = issues.filter(issue => issue.open == false);
			} else {
				dbIssues = issues;
			}

			res.render('issues', { dbIssues });
		} else {
			dbIssues = issues.filter(issue => {
				let projectfilter = issue.project == project;
				if (filter == 'on') {
					projectfilter = issue.open == false;
				}
				return projectfilter;
			});
			res.render('issues', { dbIssues });
		}
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
		if (err) {
			return next(err);
		}
	});

	res.render('index');
};

exports.deleteIssue = (req, res, next) => {
	Issue.findByIdAndRemove(req.params.id, (err, issue) => {
		if (err) return err;
		res.end('success');
	});
};
