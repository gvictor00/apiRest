// Routes
module.exports = function(application)
{
	application.get('/video1', function(req, res)
	{
		application.app.controllers.apiRest.video1(application, req, res);
	});

	application.get('/video2', function(req, res)
	{
		application.app.controllers.apiRest.video2(application, req, res);
	});

	application.get('/parar', function(req, res)
	{
		application.app.controllers.apiRest.parar(application, req, res);
	});
}