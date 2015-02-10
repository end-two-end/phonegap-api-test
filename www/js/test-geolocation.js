var getLocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else { 
        document.getElementById("status").innerHTML = "Geolocation not supported.";
    }
}

var onSuccess = function(position) {
	document.getElementById("latitude").innerHTML = position.coords.latitude;
	document.getElementById("longitude").innerHTML = position.coords.longitude;
	document.getElementById("altitude").innerHTML = position.coords.altitude;
	document.getElementById("accuracy").innerHTML = position.coords.accuracy;
	document.getElementById("altitudeAccuracy").innerHTML = position.coords.altitudeAccuracy;
	document.getElementById("heading").innerHTML = position.coords.heading;
	document.getElementById("speed").innerHTML = position.coords.speed;
	document.getElementById("timestamp").innerHTML = position.timestamp;
}

// onError Callback receives a PositionError object
var onError = function(error) {
    document.getElementById("status").innerHTML = ('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

