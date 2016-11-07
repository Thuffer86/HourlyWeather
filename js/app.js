$(function() {

  var location = "https://ipinfo.io";
  $.getJSON(location, function(data) {
    var latLong = data.loc;
	var city = (data.city);
	
 //apply location data to webpage
	$(".data__location").html(city);

//GET DarkSky Data 
	  $.getJSON("https://api.darksky.net/forecast/5cedbf3e31756f169d9dcd60b0549e09/" + latLong , function(data) {
		 	 
		 
	 });
  });
	
});




//Page Interactions
$('.temp').click(function() {
	$('.temp').removeClass('active');
    $(this).toggleClass('active');
    return false;
  });


