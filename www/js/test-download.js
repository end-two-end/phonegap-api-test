//The directory to store data
var store;

var $status;
var $source;
var $destination;

var sourceUrl = "https://raw.githubusercontent.com/dewaldbatt-end2end-org/phonegap-test/master/README.md";

// destination filename on local file system
var fileName = "mydatafile.txt";

function initDownload() {
	$status = document.querySelector("#status");

	$source = document.querySelector("#source");
	$source.innerHTML = "" + sourceUrl;

	$destination = document.querySelector("#destination");

	$status.innerHTML = "Checking for data file.";

	store = cordova.file.externalDataDirectory;

	//Check for the file. 
	window.resolveLocalFileSystemURL(store + fileName, done, downloadAsset);
}

function downloadAsset() {
	var fileTransfer = new FileTransfer();
	console.log("About to start transfer");
	fileTransfer.download(sourceUrl, store + fileName, 
		function(entry) {
			console.log("Success!");
			done();
		}, 
		function(err) {
			console.log("Error");
			console.dir(err);
		});
}

//I'm only called when the file exists or has been downloaded.
function done() {
	$destination.innerHTML = store + fileName;
	$status.innerHTML = "Done";
}
