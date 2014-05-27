var system = require("system");
var routes = require("./routes/index.js").routes;

var PORT = system.env.port || 12345;

var dispatch = function dispatch(routes, request) {
	var match;
	routes.some(function __someRoute(route) {
		if (route.path === request.url) {
			match = route[request.method];
			return true;
		}
	});
	return match;
};

var handleRequest = function handleRequest(request, response) {
	var route = dispatch(routes, request);
	if (route) {
		route({}, function __$(data) {
			response.statusCode = 200;
			response.setHeader(
				"Content-Type",
				"application/json; charset=UTF-8"
			);
			response.write(JSON.stringify(data));
			response.write("\n");
			response.closeGracefully();
		});
	}
	else {
		response.statusCode = 404;
		response.closeGracefully();
	}
};

if (
	 require("webserver")
	.create()
	.listen(PORT, handleRequest)
) {
	console.log("Server running on port " + PORT);
}
else {
	console.log("Oops! Something went wrong.");
	phantom.exit();
}
