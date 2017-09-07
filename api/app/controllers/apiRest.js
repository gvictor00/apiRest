// Controller

/* importar o módulo child_process */
var cp = require('child_process');

/* importar o módulo node-omxplayer */
var omx = require('node-omxplayer');

module.exports.parar = function(application, req, res)
{
	res.send('Comando de parada do video foi executado');

	console.log("Comando de parada");

	cp.exec('killall omxplayer.bin', function(err, stdout, stderr){
		if(err)
		{
			console.log(stderr);
			return;
		}
		console.log(stdout);
	});
} 

module.exports.repr = function(application, req, res)
{
	var query = req.query.video;

	console.log(query);
	if(query == '1')
	{
		res.send('Script de reprodução do *video 1* sendo executado.');
		console.log("Carregando o video 1");
		vd1 = omx('/home/pi/Downloads/video1.mp4', 'hdmi');
		console.log(vd1.running);
	}
	else if(query == '2')
	{
		res.send('Script de reprodução do *video 1* sendo executado.');
		console.log("Carregando o video 2");
		vd2 = omx('/home/pi/Downloads/video2.mp4', 'hdmi');
		console.log(vd2.running);
	}
}

module.exports.trovao = function(application, req, res)
{
	cp.exec('python trovao.py &', function(err, stdout, stderr){
		if(err)
		{
			console.log(stderr);
			
			//Envia o erro de volta para o servidor.
			res.send(stderr);
			return;
		}
		console.log(stdout);
	});
}

module.exports.test = function(application, req, res)
{
	var process = cp.spawn('python', ["./../../files/trovao.py"]);
	
	res.send("Abriu o arquivo python");

	process.stdout.on('data', function(data){
		res.send("Status: ",data)
	});
}

module.exports.testpost = function(application, req, res)
{
	params = req.body.video;
	console.log("Recebido o POST, com params: ",params);
	res.send("Recebido o POST com sucesso!");
}
