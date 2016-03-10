

// load the zetta module

var zetta = require('zetta'); 
var Scout_Ds18b20 = require('./scout_ds18b20'); 

// use the zetta instance to create the server
//
zetta()
	.name('tempsensor')
	.use(Scout_Ds18b20)  
        .listen(process.env.PORT || 2338, function(){
              console.log('Zetta is running at http://127.0.0.1:2338')});





		




