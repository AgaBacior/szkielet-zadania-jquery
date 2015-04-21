$(function() {
	var click = 0;
	var tablica = ['red', 'green', 'blue'];
	var kolor = 0; 
	$('button').on("click", function() {
			
			$('p').each(function(){
				$(this).css('color', tablica[(click + kolor) % 3]);				
				kolor++
			});
		click++	
	});
});
