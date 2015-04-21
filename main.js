$(function() {
	var click = 0;
	var tablica = ['red', 'green', 'blue'];
	
	$('button').on("click", function(e) {
			$('p').css('color', tablica[click % 3]);
			click++
	});
});
