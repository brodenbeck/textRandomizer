$(function() {
	$.get('/random', function(data) {
		$('#ranText').text(data);
	});

	 $.backstretch("images/detroit.jpg");
});