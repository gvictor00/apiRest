/* importar as configurações do servidor */
var app = require('./config/server');

/* Encontra a melhor porta disponível OU a porta 3000 */
var port = process.env.PORT || 3000;

/* parametrizar a porta de escuta */
app.listen(port, function(){
	console.log('Servidor Online! \nRESTful inicializada na porta: ' + port);
})
