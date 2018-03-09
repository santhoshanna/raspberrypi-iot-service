'use strict';

var util = require('util') 
var nodeimu  = require('nodeimu'); 
var IMU = new nodeimu.IMU(); 
var tic = new Date(); 
var callback = function (error, data) { 
 var toc = new Date(); 
 if (error) { 
   console.log(error); 
   return; 
 } 

Var str1 = ""
If (data.temperature && data.pressure && data.humidity) {

var str1 = util.format("Temparature :" + data.temperature.toFixed(4), "Pressure :" + data.pressure.toFixed(4), "Humidity :" + data.humidity.toFixed(4));
  }

console.log(str1); 

 setTimeout(function() { tic = new Date(); IMU.getValue(callback); } , 10000 - (toc - tic)); 

} 

IMU.getValue(callback);