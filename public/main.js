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
	$('.delete-btn').click(function() {
		let id = this.id;
		let project = this.value;
		console.log(project);
		$.ajax({
			url: '/issues/' + project + '/' + id,
			type: 'DELETE',
			data: {
				id: id
			},
			success: function(result) {
				// alert(result);
				window.location.reload();
			},
			error: function() {
				alert('The item cannot be deleted at this time.');
			}
		});
	});
});
