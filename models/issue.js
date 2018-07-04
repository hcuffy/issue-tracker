const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSchema = new Schema(
	{
		project: String,
		title: String,
		description: String,
		creator: String,
		assignee: String,
		open: Boolean,
		status: String
	},
	{ timestamps: true }
);

const ModelClass = mongoose.model('issue', IssueSchema);
module.exports = ModelClass;
