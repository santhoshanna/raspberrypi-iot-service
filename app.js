var url = require('url');

module.exports = {
	handleRequests: function(req, resp){
		resp.writeHead(200, {'Content-Type':'text/html'});
	}
};