var fs = require("fs");
fs.readFile("notes.txt", function(text){
    var arrNotes = text.split("\n")
});

fs.readdir('img/', function (err, files) {
 if (err)
    throw err;
 for (var index in files) {
    var arrPic[index] = files[index];
 }
});

function changeImage(a) {
	
	var innerArrPic = a;
	var rngImg = Math.floor(Math.random() * innerArrPic.length);
	var i = document.getElementsById('img').src="img/" + innerArrPic[rngImg];
	return true;
}

function newNote(b) {
	
	var innerArrNote = b;
	var rngNote = Math.floor(Math.random() * innerArrNote.length);
	var g = document.getElementsByTagName('span');
	i.innerHTML = i.innerHTML.replace('caption',innerArrNote[rngNote]);
	return true;
}

function startTimers() {
	
	let timerPic = setInterval(() => changeImage(arrPic), 29000);
	let timerNote = setInterval(() => newNote(arrNotes), 10000);
	return true;
}


var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

async function wait(ms) {
	var start = new Date().getTime();
	var end = start;
	while (end < start + ms){
		end = new Date().getTime();
	}
	return ms/1000;
}

var fs = require("fs");
fs.readFile("./mytext.txt", function(text){
    var textByLine = text.split("\n")
});
