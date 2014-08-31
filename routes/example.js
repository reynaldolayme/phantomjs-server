exports.GET = function GET(params, callback) {
	var casper = this;
	var account = params.account || "PhantomJS";

	 casper
	.start(encodeURI("https://mobile.twitter.com/" + account))
	.then(function () {
		var tweets = this.evaluate(function() {
			return Array.prototype.map.call(
				document.querySelectorAll('div.tweet-text'),
				function (tweet)  {
					return tweet.innerText;
				}
			);
		});
		callback(undefined, tweets);
	});

	casper.run();
};
