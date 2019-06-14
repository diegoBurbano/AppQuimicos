var fecha;
var placa;
var fotoPlaca;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        pantallaInicio();
    }
};

function hacerFoto() {
    navigator.camera.getPicture(onSuccess, onFail, { 
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI, 
        saveToPhotoAlbum:true
    });
}

function onSuccess(imageURI) {
    var msj = "Imagen guardada en carpeta /Pictures";
    document.getElementById('modal').innerHTML = imprimirModalNot(msj);
    $("#avModal").modal("show");

    var image = document.getElementById('smallImage');
    image.src = imageURI;
    fotoPlaca = imageURI;
}

function onFail(message) {
    
}



app.initialize();