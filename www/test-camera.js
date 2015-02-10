function capturePhoto() {

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });

 function onSuccess(imageData) {
   
    var image = document.getElementById("largeImage");
    image.style.display = 'block';
    image.src = "data:image/jpeg;base64," + imageData;
   
 }

 function onFail(message) {
    alert('Failed because: ' + message);
 }
}


function capturePhotoEdit() {

    navigator.camera.getPicture(onEditSuccess, onEditFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

 function onEditSuccess(imageURI) {
    
    var image = document.getElementById("largeImage");
    image.style.display = 'block';
    image.src = imageURI;
 }

 function onEditFail(message) {
    alert('Failed because: ' + message);
 }
}

function onGetSuccess(imageURI) {
        var largeImage = document.getElementById ("largeImage");
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
      }

function getPhotoFromAlbum() {
      //Specify the source to get the photos.
      navigator.camera.getPicture(onGetSuccess, onGetFail, 
      { quality: 50,destinationType: Camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM });
}

function getPhotoFromLibrary() {
      //Specify the source to get the photos.
      navigator.camera.getPicture(onGetSuccess, onGetFail, 
      { quality: 50,destinationType: Camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY });
}

function onGetFail(message) {
      alert('An error occured: ' + message);
}
