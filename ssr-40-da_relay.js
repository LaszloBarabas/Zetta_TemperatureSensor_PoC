var gpio = require("gpio");
var pin = 17; 
var pinvalue = 0; 
 

var gpio17 = gpio.export(pin, {
   direction: 'out',
   interval: 2000, 
 
   ready: function() {

   		gpio17.set( pinvalue,  function () {
			console.log(' Pin ' , pin,  '   is set to ' , gpio17.value);  
		});
	
   }
} );









