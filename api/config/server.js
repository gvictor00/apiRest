/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo body-parser */
var bodyParser = require('body-parser');

/* iniciar o objeto do express */
var app = express();

//Inclui o bodyParser como Middleware e parametriza o urlencoder
app.use(bodyParser.urlencoded({extended: true}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
//	.then('app/models')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;
