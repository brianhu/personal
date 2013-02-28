$(document).ready( function() {
	var payu_content = "A site on which video owners can organize their videos on youtube and prodcast the videos by paying money to wathcer via paypal.";
	$('#payu').popover({
		title: 'pay-u.tv',
		content: payu_content,
		trigger: 'hover',
		placement: 'right',
		html: 'text',
	  container: '#payu-popover'
	});

	var foodgod_content = "A fb app on which users can organize their team and invite friends to support their team. The team with the most votes would win some gifts. (The event was over.)";
	$('#foodgod').popover({
		title: '食神鑑賞團',
		content: foodgod_content,
		trigger: 'hover',
		placement: 'right',
		html: 'text',
		container: '#foodgod-popover'
	});

  var course_mesh_content = "A fb app that parses courses data from NTU. Users can create their time table on this app, share the table with their friends, and know who takes the same course with them.";
	$('#course-mesh').popover({
		title: 'NTU Course Mesh',
		content: course_mesh_content,
		trigger: 'hover',
		placement: 'right',
		html: 'text',
		container: '#course-mesh-popover'
	});
});
