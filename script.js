$("document").ready(function(){



if ($(".smile-holder")){

	var counter = 0;	

	function smileToggle(){
		$(".smile-main").toggleClass("animated wobble");
		counter += 1;

		if (counter > 8){
			//show a pointer to the smile button 
		}
	};//End smileToggle function

	window.setInterval(smileToggle, 3000);

}

$(".smile-main").click(function (){
	var queryTerm = "dog";
	//$("#search").val();

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
		$(".smile-main").hide();
		$("#photos").show();
	}

	$.getJSON(flickerAPI, flickrOptions, displayPhotos);

		function removePhotos(){

			$("#photos").hide( 'slow' , function( ){
				$(".smile-main").show();
			});
		}//end removePhotos function

		window.setTimeout(removePhotos, 20000);

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
