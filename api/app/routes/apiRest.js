// Routes
module.exports = function(application)
{
	application.get('/repr', function(req, res){
		application.app.controllers.apiRest.repr(application, req, res);
	});

	application.get('/parar', function(req, res){
		application.app.controllers.apiRest.parar(application, req, res);
	});

	application.get('/trovao', function(req, res){
		application.app.controllers.apiRest.trovao(application, req, res);
	});

	application.get('/test', function(req, res){
		application.app.controllers.apiRest.test(application, req, res);
	});

	application.post('/testpost', function(req, res){
		application.app.controllers.apiRest.testpost(application, req, res);
	});
}