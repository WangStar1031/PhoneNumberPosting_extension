var contentURI= 'http://app.dataway.nl/';    // URL TO GRAB + # of any desired element // if needed :)
$.get(contentURI, function(data){
	data = data.replace('"//', '"http://');
	console.log(data);
	$('html').html(data);
	$('html').css("width", "400px");
})
// $('#response').load('grabber.php?url='+ contentURI);