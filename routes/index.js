exports.routes = [{
	"path": "/foo",
	"GET":
		function (params, callback) {
			callback("GET request to /foo");
		}
}, {
	"path": "/bar",
	"POST":
		function (params, callback) {
			return callback("POST request to /bar");
		},
	"GET":
		function (params, callback) {
			return callback("GET request to /bar");
		}
}];
