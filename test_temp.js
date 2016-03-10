

var Temp = require('./temp_emitter'); 

var temp = new Temp(); 

temp.init(); 

temp.on('temp-read', function (data) { 
	console.log('Data received from the sensor: ' , data); 
}); 



