$(function() {

  var location = "https://ipinfo.io";
  $.getJSON(location, function(data) {
    var latLong = data.loc;
	var city = (data.city);
	
 //apply location data to webpage
	$(".data__location").html(city);

	  
	  
//GET DarkSky Data 
	  $.getJSON("https://api.darksky.net/forecast/5cedbf3e31756f169d9dcd60b0549e09/" + latLong , function(weatherData) {
	var currentTemp = Math.round(weatherData.currently.apparentTemperature);
	var neg1Temp = Math.round(weatherData.hourly.data[23].apparentTemperature);
	var neg2Temp = Math.round(weatherData.hourly.data[22].apparentTemperature);
	var pos1Temp = Math.round(weatherData.hourly.data[25].apparentTemperature);
	var pos2Temp = Math.round(weatherData.hourly.data[26].apparentTemperature);
		  $("#currentHr").html( currentTemp + "&deg");
		  $("#neg1Hr").html( neg1Temp + "&deg");
		  $("#neg2Hr").html( neg2Temp + "&deg");
		  $("#pos1Hr").html( pos1Temp + "&deg");
		  $("#pos2Hr").html( pos1Temp + "&deg");

	 });
  });	
});




//Page Interactions
$('.temp').click(function() {
	$('.temp').removeClass('active');
    $(this).toggleClass('active');
    return false;
  });


