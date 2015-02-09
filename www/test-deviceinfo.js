var deviceInfo = function() {
	document.getElementById("cordova").innerHTML = device.cordova;
	document.getElementById("model").innerHTML = device.model;
	document.getElementById("platform").innerHTML = device.platform;
	document.getElementById("uuid").innerHTML = device.uuid;
	document.getElementById("version").innerHTML = device.version;
}
