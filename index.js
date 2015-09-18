var whois = require('node-whois')

exports.handler = function(event, context) {
	whois.lookup(event.address, event.options || {}, function(err, results) {
		if(err) {
			return context.fail(err.toString())
		}
		
		context.succeed(results)
	})
}
