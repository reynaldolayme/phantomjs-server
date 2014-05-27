exports.routes = [{
	"p": "/foo",
	"m": {
		"GET":
			function (params, callback) {
				callback("Works.");
			}
	}
}];
