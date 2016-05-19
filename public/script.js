$(function() {
	$.get('/api/random', function(data) {
		console.log(data);
		$('#ranText').text(data);
	});

	 $.backstretch("images/detroit.jpg");
});