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
	var rand = Math.floor((Math.random()*4)+1);
	console.log(rand);
	if(rand == 1){
		var process = cp.spawn('python', ["/home/pi/Documents/apiRest/api/files/fade.py", '&']);
		process.stdout.on('data', function(data){
			console.log(data.toString('utf8'));
		});

		var date = new Date();
		console.log("Executou o python em: " + date);

		vd1 = omx('/home/pi/Documents/apiRest/api/files/trovao1.wav', 'hdmi')

		date = new Date();
		console.log("Chamou o audio em: " + date);
		
		var date = new Date();
		console.log("Executou o python em: " + date);

		console.log(date);
		res.send("Reproduziu o áudio "+rand+" sem erros em: "+date);
	}else if(rand == 2){

		var process = cp.spawn('python', ["/home/pi/Documents/apiRest/api/files/trovao_fraco.py", '&']);
		process.stdout.on('data', function(data){
			console.log(data.toString('utf8'));
		});

		var date = new Date();
		console.log("Executou o python em: " + date);

		vd1 = omx('/home/pi/Documents/apiRest/api/files/Trovao_Fraco.mp3', 'hdmi')

		date = new Date();
		console.log("Chamou o audio em: " + date);
		
		var date = new Date();
		console.log("Executou o python em: " + date);

		console.log(date);
		res.send("Reproduziu o áudio "+rand+" sem erros em: "+date);
	}else if(rand == 3){

		var process = cp.spawn('python', ["/home/pi/Documents/apiRest/api/files/trovao_medio.py", '&']);
		process.stdout.on('data', function(data){
			console.log(data.toString('utf8'));
		});

		var date = new Date();
		console.log("Executou o python em: " + date);

		vd1 = omx('/home/pi/Documents/apiRest/api/files/Trovao_Medio.mp3', 'hdmi')

		date = new Date();
		console.log("Chamou o audio em: " + date);
		
		var date = new Date();
		console.log("Executou o python em: " + date);

		console.log(date);
		res.send("Reproduziu o áudio "+rand+" sem erros em: "+date);
	}else if(rand == 4){

		var process = cp.spawn('python', ["/home/pi/Documents/apiRest/api/files/trovao_muito_forte.py", '&']);
		process.stdout.on('data', function(data){
			console.log(data.toString('utf8'));
		});

		var date = new Date();
		console.log("Executou o python em: " + date);

		vd1 = omx('/home/pi/Documents/apiRest/api/files/Trovao_Muito_Forte.mp3', 'hdmi')

		date = new Date();
		console.log("Chamou o audio em: " + date);
		
		var date = new Date();
		console.log("Executou o python em: " + date);

		console.log(date);
		res.send("Reproduziu o áudio "+rand+" sem erros em: "+date);
	}
}

module.exports.testpost = function(application, req, res)
{
	recvd = req.body.video;

	res.send("Recebido o POST com sucesso! Dado enviado: " + recvd);
}
