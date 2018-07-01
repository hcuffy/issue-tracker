$(document).ready(function() {
	document
		.getElementById('issue-title')
		.addEventListener('invalid', function() {
			this.setCustomValidity('Please enter an issue title.');
		});

	document.getElementById('issue-title').addEventListener('input', function() {
		this.setCustomValidity('');
	});

	document.getElementById('issue-des').addEventListener('invalid', function() {
		this.setCustomValidity('Please describe the issue.');
	});

	document.getElementById('issue-des').addEventListener('input', function() {
		this.setCustomValidity('');
	});
	document.getElementById('created-by').addEventListener('invalid', function() {
		this.setCustomValidity('Please enter the issue creator.');
	});

	document.getElementById('created-by').addEventListener('input', function() {
		this.setCustomValidity('');
	});
});
