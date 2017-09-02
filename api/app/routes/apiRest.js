// Routes
module.exports = function(application)
{
	application.get('/repr', function(req, res){
		application.app.controllers.apiRest.repr(application, req, res);
	});

	application.get('/parar', function(req, res){
		application.app.controllers.apiRest.parar(application, req, res);
	});
}