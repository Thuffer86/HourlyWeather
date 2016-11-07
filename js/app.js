function initGeolocation()
     {
        if( navigator.geolocation )
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition( success, fail );
        }
        else
        {
           alert("Sorry, your browser does not support geolocation services.");
        }
     }

     function success(position)
     {

        var positionLong  = position.coords.longitude;
        var positionLat  = position.coords.latitude;
		 		console.log(positionLat, positionLong);
		 

     }

     function fail()
     {
		 console.log('Something went wrong');
     }



$('.temp').click(function() {
	$('.temp').removeClass('active');
    $(this).toggleClass('active');
    return false;
  });


