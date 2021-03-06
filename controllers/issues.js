const Issue = require('../models/issue')

exports.getIssues = (req, res, next) => {
	const { project, filter } = req.query
	let dbIssues = []
	let projects = ['FCC','Testing','Javascript']
	Issue.find({}, (err, issues) => {
		if (err) {
			return next(err)
		}
		if (project == 'All' || (Object.keys(req.body).length === 0 && req.body.constructor === Object) && !projects.includes(project)) {
			if (filter == 'on') {
				dbIssues = issues.filter(issue => issue.open == false)
			} else {
				dbIssues = issues
			}

			res.render('issues', { dbIssues })
		} else {
			dbIssues = issues.filter(issue => {
				let projectfilter = issue.project == project
				if (filter == 'on') {
					projectfilter = issue.open == false
				}
				return projectfilter
			})
			res.render('issues', { dbIssues })
		}
	})
}

exports.createIssue = (req, res, next) => {
	let { project, title, description, creator, assignee, status } = req.body

	if (title == '' || description == '' || creator == '') {
		res.end('These fields cannot be empty.')

	} else {

		const newIssue = new Issue({
			project,
			title,
			description,
			creator,
			assignee,
			status,
			open: true
		})

		newIssue.save(err => {
			if (err) {
				return next(err)
			}
		})

		res.render('index')
	}
}

exports.deleteIssue = (req, res, next) => {

	Issue.findByIdAndRemove(req.params.id, (err, issue) => {
		if (err) {
			return next(err)
		}
		if (issue == null){
			res.end('Could not find issue in database.')
		} else {
			res.end('success')
		}
	})
}

exports.editIssue = (req, res, next) => {
	const { id } = req.params
	let { project, title, description, creator, assignee, status } = req.body

	if (Object.keys(req.body).length === 0 && req.body.constructor === Object){
		res.end('Missing request body.')
	}

	Issue.findById(id, function(err, issue) {
		if (err) {
			return next(err)
		}

		if (
		   project == issue.project &&
			title == issue.title &&
			description == issue.description &&
			creator == issue.creator &&
			assignee == issue.assignee &&
			status == issue.status
		) {

			res.end('There are no fields to update.')
		} else {
			Issue.findByIdAndUpdate(
				id,
				{
					$set: {
						project: project,
						title: title,
						description: description,
						creator: creator,
						assignee: assignee,
						status: status
					}
				},
				{
					new: true
				},
				function(err, issue) {
					if (err) {
						return next(err)
					}
				}
			)
			res.end('Issue ' + id + ' was successfully updated.')
		}

	})


}
