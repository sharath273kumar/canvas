var numberGrid=16;

$(document).ready(function() {
	makeGrid();
	$('.grid').mouseenter(function(){
		$(this).css("background-color","#000");
	});
});

function makeGrid()
{
	for(x=1;x<=numberGrid;x++)
		for(y=1;y<numberGrid;y++)
			$('<div class="grid"></div>').appendTo('#wrapper');
	$('.grid').css("width","45px");
	$('.grid').css("height","45px");
}


