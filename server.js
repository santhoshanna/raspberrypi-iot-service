var http = require('http');
var util = require('util'); 
var nodeimu  = require('nodeimu'); 
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var logging = require('./logger');
var application = require('./app');
var Message = require('azure-iot-device').Message;
var express = require('express');
var errorHandler = require('errorhandler');

const config = require('./config.js');

const app = express();
var IMU = new nodeimu.IMU(); 
var tic = new Date(); 
var env = process.env.ENVIRONMENT || 'develop';
var configObj = config[env+'_config'];
var client = clientFromConnectionString(configObj.iot.connection);
var tphObj = {
		code : 0,
		message : "",
		status : "",
		temperature : "",
		pressure : "",
		date:dateTimeConfig.getCurrentDateTime(),
		humidity : ""
};

const app = express();
app.set('port', process.env.PORT || 8080);

//Routes
app.all('/*', function(req, res, next) {
	if ((req.method != 'POST') && (req.method != 'GET') && (req.method != 'PUT') && (req.method != 'DELETE')) {
		res.status(405);
		res.set('Accept', 'GET, POST, PUT, DELETE');
		res.send();
	} else
		next();
});

//IMU Read
app.route('/imu').get(function(req, res) {
	logging.info("Starting imu get function() - server.js");
	
	try{
		tphObj.temperature = data.temperature.toFixed(4); tphObj.pressure = data.pressure.toFixed(4); tphObj.humidity = data.humidity.toFixed(4);
		tphObj.code = 200; tphObj.message = "TPH values retrieved successfully"; tphObj.status = "success";
		logging.info("Current TPH is: "+ tphObj);
		logging.info("Ending imu get function() - server.js");
	    res.status(200).send(tphObj);
	}catch(error){
		tphObj.code = 500; tphObj.status = "failed";
		tphObj.message = 'Error while getting tph data from sensors, error-message : '+error.message;	
		logging.info("Ending imu get function() - server.js");
	    res.status(500).send(tphObj);
	}

});

//Post TPH to IOT device
app.route('/iot').post(function(req, res, curentTPH) {
        logging.info("Starting iot post function() - server.js");

    try{
        tphObj.temperature = data.temperature.toFixed(4); tphObj.pressure = data.pressure.toFixed(4); tphObj.humidity = data.humidity.toFixed(4);
        tphObj.code = 200; tphObj.message = "TPH values retrieved successfully"; tphObj.status = "success";
        var message = new Message(tphObj);
		client.open(client.sendEvent(message, printResultFor('send'));
		logging.info("Ending iot post function() - server.js");
		res.status(200).send(tphObj);
	}catch(error){
		tphObj.code = 500; tphObj.status = "failed";
		tphObj.message = 'Error while getting tph data from sensors, error-message;	
		logging.info("Ending iot post function() - server.js");
		res.status(500).send(tphObj);
	}

});

app.listen(config.port, () => {console.log('Orders server started on port ' + config.port + '.');});