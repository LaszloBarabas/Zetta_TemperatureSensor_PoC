
// load the Device class from teh zetta module 
var Driver = require('zetta').Device; 

// load the util module for inheritance 
var util = require('util'); 

// create a Ds18b20 driver class 

var Ds18b20 = module.exports = function Ds18b20 () { 
	Driver.call(this); 

}; 

util.inherits(Ds18b20, Driver);
// init , just one time called 
Ds18b20.prototype.init = function (config) {

	var self = this; 

	config
	 .type('ds18b20')
 	 .name('ds18b20_temp_senor')
	 .state('ready') 
	 .monitor('temperatureValue'); 

	// create an alternative way to read and monitor temperature sensor 
	var counter = setInterval(this.read.bind(this), 1000);   

}; 


Ds18b20.prototype.read = function () { 
	var self = this; 
	self.temperatureValue = new Date(); 


}
// terminate the inheritences 


