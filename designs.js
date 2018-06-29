// Select color input
// Select size input
var color, hsize, wsize;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
	event.preventDefault();
	hsize = $('#inputHeight').val();
	wsize = $('#inputWeight').val();
	makeGrid(hsize, wsize)
	// console.log(hsize + " " + wsize)
});

function makeGrid(i, j) {
	$('tr').remove();
	for (var r = 1; r <= i; r++) {
		$('#pixelCanvas').append('<tr id= table' + r + '></tr>');
		for (var c = 1; c <= j; c++) {
			$('#table'+r).append('<td></td>');
		}
	}

	// add color to cell
	$('td').click(function addColor() {
		color = $('#colorPicker').val();

		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);
		}
	})
}