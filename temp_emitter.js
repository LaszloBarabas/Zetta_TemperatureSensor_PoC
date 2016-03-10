
var util = require('util'); 
var EventEmitter = require('events').EventEmitter; 


var TempEventEmitter = module.exports = function TempEventEmitter() {
	EventEmitter.call(this); 	
}

util.inherits(TempEventEmitter, EventEmitter); 


TempEventEmitter.prototype.init= function () {

	var self = this; 	
	var counter = setInterval( function () {
		var data = new Date(); 	
		self.emit('temp-read', data); 
		
	}, 1000); 
}

