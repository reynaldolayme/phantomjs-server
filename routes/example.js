exports.GET = function GET(params, callback) {
	var page = this;
	var tweets = [];
	var account = params.account || "PhantomJS";
	page.open(encodeURI("https://mobile.twitter.com/" + account), function (status) {
		if (status !== "success") {
			callback({
				"statusCode": 500,
				"message": status
			});
		} else {
			var tweets = page.evaluate(function() {
				return Array.prototype.map.call(
					document.querySelectorAll('div.tweet-text'),
					function (tweet)  {
						return tweet.innerText;
					}
				);
			});
			callback(undefined, tweets);
		}
	});
};
