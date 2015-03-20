$("document").ready(function(){


//Globals
var viewCounter = 0;
var happyArray = [
		{
			"happyTagName":"Nature"
		}, 
		{
			"happyTagName":"Dogs"
		}, 
		{
			"happyTagName":"Cats"
		}, 
		{
			"happyTagName":"Beach"
		}, 
		{
			"happyTagName":"Mountain"
		}, 
		{
			"happyTagName":"River"
		}, 
		{
			"happyTagName":"Bird"
		}, 
		{
			"happyTagName":"Sun"
		}, 
		{
			"happyTagName":"Flower"
		}, 
];

function createNewHappy(happyTagName){
	this.happyTagName = happyTagName;

}

function writeHappyList(happyArray){
	$(".happy-list").empty();

	for (var i = 0; i < happyArray.length; i++ ){

	var happyTag = "<li class='btn btn-default'>" + happyArray[i].happyTagName + "  " + "<span class='glyphicon glyphicon-remove'></span>" + "</li>"; 
	$(".happy-list").append(happyTag);

}



}


if ($(".smile-holder")){

	var counter = 0;	

	function smileToggle(){
		$(".smile-main").toggleClass("animated wobble");
		counter += 1;

		if (counter > 8){
			//show a pointer to the smile button 
		}
	} //End smileToggle function

	window.setInterval(smileToggle, 3000);

}

$(".smile-main").click(function (){
	
	var happyArrayIndex = Math.floor(Math.random() * (happyArray.length - 0 ) + 0 );

	viewCounter += 1;

	console.log(viewCounter);
	

	var queryTerm = happyArray[happyArrayIndex].happyTagName;
	console.log(queryTerm); 
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


if ($(".happy-list")){

if(localStorage.getItem("happyArray")){
	happyArray = JSON.parse(localStorage.getItem("happyArray"));

}	


writeHappyList(happyArray);


$(".happy-button").click(function(){
	 newHappyName = $("input").val(); 

	 var newHappyTag = new createNewHappy(newHappyName);

	 happyArray.push(newHappyTag); 

	 writeHappyList(happyArray);

	 $("input").val( " " );

	 localStorage.setItem("happyArray", JSON.stringify(happyArray)); 

});


$(".btn-default").click(function(){

	var i = $(this).index();
	happyArray.splice(i, 1);
	$(this).remove();
	localStorage.setItem("happyArray", JSON.stringify(happyArray)); 
});



}

if (viewCounter == 2){

	$("#myModal").modal('show');


}

//Create global happiness array


//When page loads, check for happiness array and append any checked boxes to the custom happiness area 
//When Save button is clicked, collect values of checked boxes and store/write in array



//When custom happiness button is clicked, collect value of text input and add to array. Append checked checkbox to happiness area, clear input 





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
