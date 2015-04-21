$(function() {
	
	var click = 0;
	var tablica = ['red', 'green', 'blue'];
	var kolor = 0; 
	$('#button1').on("click", function() {
			
			$('p').each(function(){
				$(this).css('color', tablica[(click + kolor) % 3]);				
				kolor++
			});
		click++	
	});
	
	$('#button2').on("click", function() {		
		var newDiv = $('<div><div style="float: left; margin-right: 5px;">Jak</div><div style="float: left; margin-right: 5px;">żyć</div><div style="float: left; margin-right: 5px;">panie</div><div style="float: left;">premierze?</div></div>');
		newDiv.appendTo('body');
	});
});
