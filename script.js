//When you click the search button, take search box value and query Flickr API

$(".btn-success").click(function (){
	var queryTerm = $("#search").val();
	console.log(queryTerm);
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var flickrOptions = {
			tags: queryTerm,
			format: "json"
		};

	function displayPhotos(data){

		var photoHTML = '<ul>';
		$.each(data.items, function(i, photo){
			photoHTML += '<li><img src="' + photo.media.m +'"> </li>';
			photoHTML += '</ul>';
			$("#photos").html(photoHTML);

		});
	}

	$.getJSON(flickerAPI, flickrOptions, displayPhotos);

}); 

/*Everything below this comment is trying to pull in the values from the happiness check box

var happyArray = [];

$(".btn-success").click(function (){
	
	$('input[type="checkbox"]:checked').each(function(index){
		console.log($(this).val());
		happyArray.push($(this).val());

	})

	console.log(happyArray);

});

$('.happyAdd').click(function(){
	var happyAdd = $('#happyAdder').val();
	$('#happiness_box').append('<input type="checkbox" value="' + happyAdd + '" checked>' + " " + happyAdd);

}) */
