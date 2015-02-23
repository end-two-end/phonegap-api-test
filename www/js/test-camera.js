function capturePhoto() {
//    clearImageExifData();
    navigator.camera.getPicture(onCapturePhotoSuccess, onCapturePhotoFail, {
        quality: 50,
        saveToPhotoAlbum: true,
        sourceType: Camera.PictureSourceType.CAMERA,
        destinationType: Camera.DestinationType.DATA_URL        
    });

    function onCapturePhotoSuccess(imageData) {
        // create new img elem
        var newImg = document.createElement("img");
        newImg.id = "photo";
        newImg.src = "data:image/jpeg;base64," + imageData;

        // add new img elem to div container
        var photoDiv = document.getElementById("photoDiv");
        photoDiv.innerHTML = "";
        photoDiv.appendChild(newImg);
        
//        var image = document.getElementById("photo");
//        image.style.display = 'block';
//        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onCapturePhotoFail(message) {
        alert('Failed because: ' + message);
    }
}

function getImageExifData() {
    var image = document.getElementById("photo");
    if (image.src !== '') {
        EXIF.getData(image, function() {
//            alert(EXIF.pretty(this));
            var datetime = EXIF.getTag(this, "DateTimeOriginal");
            var gpsLat = EXIF.getTag(this, "GPSLatitude");
            var gpsLong = EXIF.getTag(this, "GPSLongitude");
            document.getElementById("datetime").innerHTML = datetime;
            document.getElementById("gpsLat").innerHTML = gpsLat;
            document.getElementById("gpsLong").innerHTML = gpsLong;
//            alert("\n DateTimeOriginal: " + datetime +
//                  "\n GPSLatitude: " + gpsLat +
//                  "\n GPSLongitude: " + gpsLong);
        });
    }
}

function clearImageExifData() {
    document.getElementById("datetime").innerHTML = "";
    document.getElementById("gpsLat").innerHTML = "";
    document.getElementById("gpsLong").innerHTML = "";
}

function capturePhotoEdit() {
//    clearImageExifData();
    navigator.camera.getPicture(onGetSuccess, onGetFail, {
        quality: 50,
        sourceType: Camera.PictureSourceType.CAMERA,
        destinationType: Camera.DestinationType.NATIVE_URI
    });
}

function getPhotoFromAlbum() {
//    clearImageExifData();
    navigator.camera.getPicture(onGetSuccess, onGetFail, {
        quality: 50,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: Camera.DestinationType.NATIVE_URI
    });
}

function getPhotoFromLibrary() {
//    clearImageExifData();
    navigator.camera.getPicture(onGetSuccess, onGetFail, {
        quality: 50,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.NATIVE_URI
    });
}

function onGetSuccess(imageURI) {
    // create new img elem
    var newImg = document.createElement("img");
    newImg.id = "photo";
    newImg.src = imageURI;

    // add new img elem to div container
    var photoDiv = document.getElementById("photoDiv");
    photoDiv.innerHTML = "";
    photoDiv.appendChild(newImg);
}

function onGetFail(message) {
    alert('An error occured: ' + message);
}
