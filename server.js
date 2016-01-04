var EventSource = require('eventsource');
//var rest = require('restler');

var deviceID = "380038000447343339373536";
var accessToken = "0700fc7548ae1314981e2f828371ed67459a8e42";
var accessTokenURI = "/?access_token=" + accessToken;
var device = "https://api.particle.io/v1/devices/" + deviceID;
var eventsURI = device + "/events" + accessTokenURI;
var eventSrc = new EventSource(eventsURI);

eventSrc.addEventListener('temp', function(e) {
    var data = JSON.parse(e.data);
    var temp = JSON.parse(data['data']);
    var celsius = temp['celsius'];
    var farenheit = temp['farenheit'];
    console.log("celsius: " + celsius);
    console.log("farenheit: " + farenheit);
});

eventSrc.addEventListener('humidity', function(e) {
    var data = JSON.parse(e.data);
    var humidity = data['data'];
    console.log("humidity: " + humidity);
});

eventSrc.addEventListener('status', function (e) {
    var data = JSON.parse(e.data);
    console.log(data['data']);
});

var express = require('express');
var app = express();

app.listen(3000, function () {
    console.log("listening");
});
