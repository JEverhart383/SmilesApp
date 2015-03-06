$("document").ready(function(){

	window.setInterval( smileToggle, 3000);

	function smileToggle(){

	$(".smile-main").toggleClass("animated wobble");
	};

$(".btn-success").click(function (){
	var queryTerm = $("#search").val();

	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var flickrOptions = {
			tags: queryTerm,
			format: "json"
		};

	function displayPhotos(data){


		var photoHTML = '<ul>';
		$.each(data.items, function(i, photo){
			photoHTML += '<li class="dynamicLI"><img src="' + photo.media.m +'" class="img-responsive img-thumbnail" align="center"> </li>';
		});
		
		photoHTML += '</ul>';
		$("#photos").html(photoHTML);

		//$("#photos").show();
		//$("#photos").hide(30000 , function( ){
		//	$("#photos").html(" ");

		//});
	}

	$.getJSON(flickerAPI, flickrOptions, displayPhotos);

}); 

/*var happyArray = [];

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

});
