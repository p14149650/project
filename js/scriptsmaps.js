//utisling window.setTimeout() to space space out my markrs for my placement and university location
//The user will be able to click a markers tab and the pinpoitns drop on the map

//set the pinpoints on the map
 
       var pinpoints = [
	   {lat: 52.6298, lng: -1.1394},
	   {lat:52.6295, lng: -1.1448},
	   
	   ];
	   //set the function for the markers and map
	   var markers = [];
	   var map;
	   
	   function initMap() {
		   //get the element Id from mymap assigned in the html and css
		   map = new google.maps.Map(document.getElementById('mymap'), {
			   zoom: 12,
			   center: {lat: 52.6298, lng: -1.1394}
		   });
	   }
	   
	   //Assign the function drop set timer
	   
	   function drop () {
		   clearMarkers();
		   for (var i = 0; i < pinpoints.length; i++) {
			   addMarkerWithTimeout(pinpoints[i], i * 200);
		   }
	   }
	   
	   //add in the function for animation drop if the marker position is set
	   
	   function addMarkerWithTimeout(position, timeout) {
		   window.setTimeout(function() {
			   markers.push(new google.maps.Marker({
				   position: position,
				   map: map,
				   animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }
	  //set the maixumum length for the markers if less than the amount of pinpoints assigned
	  
	  function clearMarkers() {
		  for (var i = 0; i < markers.length; i++) {
			  markers[i].setMap(null);
		  }
		  markers = [];
	  }
		  
		  
	  
	  
	  
	   
	   
	   
	   
	   
	   
	   


      
	  
