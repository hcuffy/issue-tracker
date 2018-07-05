const Issue = require('../models/issue');

exports.getIssues = (req, res, next) => {

const {project} = req.query;
let dbIssues=[]
	Issue.find({}, (err, issues) => {
		if (err)
		   return next(err);
if(project == 'All'){
	dbIssues = issues;
		res.render('issues', { dbIssues });

}else{
 dbIssues = issues.filter(issue => issue.project == project);


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
		if (err) return next(err);
	});

	res.render('index');
};
