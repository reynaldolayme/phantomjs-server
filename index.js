var system = require("system");
var routes = require("./routes/index.js").routes;

var PORT = system.env.port || 12345;

var page = new WebPage();
page.viewportSize = { "width": 1024, "height": 768 };

var parseQueryString = function parseQueryString(url) {
	var idx = url.indexOf("?");
	if (!~idx) {
		return undefined;
	}
	var fragmentIdx = url.indexOf("#");
	var queryString = url.substring(idx + 1, ~fragmentIdx ? fragmentIdx : undefined);
	return decodeURIComponent(queryString)
	.split("&")
	.map(function (e, i, a) {
		var parts = e.split("=");
		return {
			"k": parts[0],
			"v": parts[1]
		};
	});
};

var dispatch = function dispatch(routes, request) {
	var match;
	routes.some(function _someRoute(route) {
		if (route.p != request.url) {
			return false;
		}
		match = route.m[request.method];
		return true;
	});
	return match;
};

var handleRequest = function handleRequest(request, response) {
	var route = dispatch(routes, request);
	var data  = request.method == "GET" ? parseQueryString(request.url) : request.post;
	if (route) {
		route.call(page, data, function _route(err, data) {
			if (err) {
				response.statusCode = err.statusCode;
				response.setHeader(
					"Content-Type",
					"application/json; charset=utf-8"
				);
				response.write(JSON.stringify(err));
				response.write("\n");
				response.closeGracefully();
				return;
			}

			response.statusCode = 200;
			response.setHeader(
				"Content-Type",
				"application/json; charset=utf-8"
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
