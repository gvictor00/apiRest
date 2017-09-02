// Controller

/* improtar o módulo child_process */
var cp = require('child_process')

module.exports.video1 = function(application, req, res)
{
	res.send('Script de reprodução do *video 1* sendo executado.');
	
	console.log("Executando o video 1");

	cp.exec('omxplayer -r -b /home/pi/Downloads/video1.mp4', function(err,stdout, stderr){
		if(err)
		{
			console.log(stderr);
			return;
		}
		console.log(stdout);
	});
} 

module.exports.video2 = function(application, req, res)
{
	res.send('Script de reprodução do *video 2* sendo executado.');

	console.log("Executando o video 2");

	cp.exec('omxplayer -r -b /home/pi/Downloads/video2.mp4', function(err,stdout, stderr){
		if(err)
		{
			console.log(stderr);
			return;
		}
		console.log(stdout);
	});
} 

module.exports.parar = function(application, req, res)
{
	res.send('Comando de parada do vídeo foi executado');

	console.log("Comando de parada");

	cp.exec('killall omxplayer.bin', function(err,stdout, stderr){
		if(err)
		{
			console.log(stderr);
			return;
		}
		console.log(stdout);
	});
} 