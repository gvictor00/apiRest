// Controller

/* importar o módulo child_process */
var cp = require('child_process');

/* importar o módulo node-omxplayer */
var omx = require('node-omxplayer');

/* O módulo node-omxplayer usar o child_process para execução da query de reprodução do omxplayer */

module.exports.parar = function(application, req, res)
{
	res.send('Comando de parada do video foi executado');

	cp.exec('killall omxplayer.bin', function(err, stdout, stderr){
		if(err)
		{
			return;
		}
	});
} 

module.exports.repr = function(application, req, res)
{
	var query = req.query.video;

	if(query == '1')
	{
		res.send('Script de reprodução do video 1 sendo executado.');
		vd1 = omx('/home/pi/Downloads/video1.mp4', 'hdmi');
	}
	else if(query == '2')
	{
		res.send('Script de reprodução do video 2 sendo executado.');
		vd2 = omx('/home/pi/Downloads/video2.mp4', 'hdmi');
	}
}

module.exports.trovao = function(application, req, res)
{
	console.log("Em construção!");
}

module.exports.test = function(application, req, res)
{
	var process = cp.spawn('python', ["/home/pi/Documents/apiRest/api/files/test.py", '&']);
	process.stdout.on('data', function(data){
		console.log(data.toString('utf8'));
	});

	var date = new Date();
	console.log("Executou o python em: " + date);

	vd1 = omx('/home/pi/Downloads/video1.mp4', 'hdmi');
	//vd1 = omx('/home/pi/Documents/apiRest/api/files/thunder3.wav', 'hdmi')
	//res.send('Script de reprodução do video 1 sendo executado.');

	date = new Date();
	console.log("Chamou o video em: " + date);
	
	var date = new Date();
	console.log("Executou o python em: " + date);

	console.log(date);
	res.send("Passou por tudo sem erros em: "+date);
}

module.exports.testpost = function(application, req, res)
{
	recvd = req.body.video;

	res.send("Recebido o POST com sucesso! Dado enviado: " + recvd);
}
