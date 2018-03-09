var http = require('http');
var util = require('util'); 
var nodeimu  = require('nodeimu'); 
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var logging = require('./logger');
var Message = require('azure-iot-device').Message;
var connectionString = 'HostName=BH-IOT-HUB.azure-devices.net;DeviceId=BS-Raspberry-pi;SharedAccessKey=ZLQgsQwWu/+lSm5aNcL8STcOwDhGyXYrVBDyTe/0Kbg=';
const express = require('express');
const app = express();
const config = require('./config.js');

var IMU = new nodeimu.IMU(); 
var tic = new Date(); 
var client = clientFromConnectionString(connectionString);
var statusObj = {
		code : 0,
		message : "",
		status : "",
		action : "",
		collection : "",
		date:dateTimeConfig.getCurrentDateTime(),
		content : ""
};

app.set('port', process.env.PORT || 8080);


//IMU Read
app.route('/imu').get(function(req, res) {
var toc = new Date(); 
var tph = ""

logging.info("Fetched successfully - server.js");
					statusObj.code = 200; statusObj.message = "Record retrieved successfully"; statusObj.status = "success";
					collectionDB.recordLogs(statusObj, function(logResponse){});
					res.send(response);
					response = {};statusObj = {};

if (data.temperature && data.pressure && data.humidity) {
       tph = util.format("Temparature :" + data.temperature.toFixed(4), "Pressure :" + data.pressure.toFixed(4), "Humidity :" + data.humidity.toFixed(4));
       console.log(tph); 
       res.status(200).send(resp);
  }
// setTimeout(function() { tic = new Date(); IMU.getValue(callback); } , 10000 - (toc - tic)); 
});

//Post TPH to IOT device
app.route('/iot').post(function(req, res) {
		client.open(connectCallback);

		var temperature = 20 + (Math.random() * 15);
        var humidity = 60 + (Math.random() * 20);            
        var data = JSON.stringify({ deviceId: 'myFirstNodeDevice', temperature: temperature, humidity: humidity });
        var message = new Message(data);
        message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');
        console.log("Sending message: " + message.getData());
        client.sendEvent(message, printResultFor('send'));
});


function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res) console.log(op + ' status: ' + res.constructor.name);
  };
}

var connectCallback = function (err) {
  if (err) {
    console.log('Could not connect: ' + err);
  } else {
    console.log('Client connected');

    // Create a message and send it to the IoT Hub every second
    setInterval(function(){
// Here is the merge of the code needs to happen
        
	var temperature = 20 + (Math.random() * 15);
        var humidity = 60 + (Math.random() * 20);            
        var data = JSON.stringify({ deviceId: 'myFirstNodeDevice', temperature: temperature, humidity: humidity });
        var message = new Message(data);
        message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');
        console.log("Sending message: " + message.getData());
        client.sendEvent(message, printResultFor('send'));
    }, 1000);
  }
};
client.open(connectCallback);