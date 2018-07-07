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

	$('#project-selection').change(function() {
		let action = this.value;
		$('#issue-form').attr('action', '/new/' + action);
	});

	$('#issue-project').change(function() {
		let action = this.value;
		$('#issue-form').attr('action', '/issues/' + action);
	});

	$('.delete-btn').click(function() {
		let id = this.id;
		let project = this.value;
		$.ajax({
			url: '/issues/' + project + '/' + id,
			type: 'DELETE',
			data: {
				id: id
			},
			success: function(result) {
				window.location.reload();
			},
			error: function() {
				alert('Issue ' + id + ' could not be deleted.');
			}
		});
	});

	$('#Edit-btn').click(function() {
		var data = $(this)
			.parent()
			.children()
			.toArray();
		let dataArr = [];

		for (var i = 0; i < data.length - 4; i++) {
			let info = data[i].innerHTML.replace(/.*\>/g, '');

			dataArr.push(info);
		}

		$('#edit-issue-form').attr(
			'action',
			'/edit/' + dataArr[15] + '/' + dataArr[0]
		);
		$('#edit-id').text(dataArr[0]);
		$('#project-editor').val(dataArr[15]);
		$('.new-title').val(dataArr[3]);
		$('.new-description').val(dataArr[5]);
		$('.new-creator').val(dataArr[9]);
		$('.new-assignee').val(dataArr[10]);
		$('.new-status').val(dataArr[7]);
		$('.id').val(dataArr[0]);
		$('#edit-form').modal();
	});

	$('#project-editor').change(function() {
		let action = this.value;
		$('#edit-issue-form').attr('action', '/edit/' + action);
	});

	$('.edit-submit').click(function() {
		let id = $('.id').val();
		let project = $('#project-editor').val();
		let data = {
			project: project,
			title: $('.new-title').val(),
			description: $('.new-description').val(),
			creator: $('.new-creator').val(),
			assignee: $('.new-assignee').val(),
			status: $('.new-status').val()
		};
		$.ajax({
			url: '/edit/' + project + '/' + id,
			type: 'PUT',
			data: data,
			success: function(result) {
				window.location.reload();
				alert('test');
			},
			error: function() {
				$.alert({
					title: 'Error!',
					content: 'Issue ' + id + ' could not be deleted.'
				});
			}
		});
	});
});
