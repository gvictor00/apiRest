/* importar as configurações do servidor */
var app = require('./config/server');

/* Encontra a melhor porta disponível OU a porta 3000 */
var port = process.env.PORT || 3000;

/* parametrizar a porta de escuta */
app.listen(port, function(){

	console.log('\n=========================');
	console.log('Servidor Online!');

	var os = require('os');
	var ifaces = os.networkInterfaces();

	Object.keys(ifaces).forEach(function (ifname) 
	{
		var alias = 0;

		ifaces[ifname].forEach(function (iface) {
			if ('IPv4' !== iface.family || iface.internal !== false) {
		      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
		      return;
		  }

	    // this interface has only one ipv4 adress
	    console.log("Restful API em: "+iface.address+":"+port);
	    console.log('=========================');
		});
	});
})
