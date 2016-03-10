
var Scout = require('zetta').Scout ; 
var util = require('util'); 
var  Ds18b20 = require ('./ds18b20');  

var TempSensor = require('./temp_emitter'); 

var tempSensor = new TempSensor(); 
tempSensor.init(); 


var Scout_Ds18b20 = module.exports = function Scout_Ds18b20 () {
	Scout.call(this); 
}
	
util.inherits(Scout_Ds18b20, Scout); 


Scout_Ds18b20.prototype.init = function ( next) {

	var self = this; 

/** 
*	setTimeout( function () {	
*		self.discover( Ds18b20); 
*		tempSensor.on('temp-read', function (data) { 
*			console.log('Data received from the sensor: ' , data); 
*		})
*	}, 1000); 
*/	
	setTimeout( function () {
		self.discover(Ds18b20); 
	}, 1000); 

	next(); 
}



