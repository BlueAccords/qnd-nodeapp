// get the nerd model
var Nerd = require('./models/nerd');

	module.exports = function(app){

		// server routes ======================================
		//handle api calls and auth routes.
		// sample api route
		app.get('/api/nerds', function getNerds(req, res){
			// using mongoose to get all nerds in database.
			Nerd.find(function(err, nerds) {
				// if error, then send error(this exits the query)
				if(err)
					res.send(err);
				// return results in JSON.
				res.json(nerds);
			});
		});

		// route ot handle creating nerds here(app.post)
		// deleting nerds here(app.delete)

		// frontend routes =====================================
		app.get('*', function(req, res){
			res.sendfile('./public_views/index.html');
		});
	};