const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issues');

router.post('/new/*', issueController.createIssue);
router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
