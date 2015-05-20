
//To remove items

$(':header').addClass('headLine');
$('.app > li:lt(4)').hide().fadeIn(1500);
$('li').on('click', function(){
	$(this).remove();
});


// To Show and Hide button and form

$(function(){
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');

	$newItemButton.show();
	$newItemForm.hide();

	$('#showForm').on('click' , function(){
		$newItemButton.hide();
		$newItemForm.show();
	});

  $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $textInput.val();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });

});