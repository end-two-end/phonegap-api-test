//The directory to store data
var store;

//Used for status updates
var $status;

var $file;

//URL of our asset
var remoteFileUrl = "https://raw.githubusercontent.com/dewaldbatt-end2end-org/phonegap-test/master/README.md";

// destination filename on local file system
var fileName = "mydatafile.txt";

function initDownload2() {
	
	$status = document.querySelector("#status");
	$file = document.querySelector("#file");

	$status.innerHTML = "Checking for data file.";

//	store = cordova.file.dataDirectory;
	store = cordova.file.externalDataDirectory;


	//Check for the file. 
	window.resolveLocalFileSystemURL(store + fileName, appStart, downloadAsset);

}

function downloadAsset() {
	var fileTransfer = new FileTransfer();
	console.log("About to start transfer");
	fileTransfer.download(remoteFileUrl, store + fileName, 
		function(entry) {
			console.log("Success!");
			appStart();
		}, 
		function(err) {
			console.log("Error");
			console.dir(err);
		});
}

//I'm only called when the file exists or has been downloaded.
function appStart() {
	$file.innerHTML = store + fileName;
	$status.innerHTML = "Done";
}
