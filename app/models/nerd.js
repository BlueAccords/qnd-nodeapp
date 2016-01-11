// mongoose module
var mongoose = require('mongoose');

// define the nerd model.
// this is passsed to other files when it's called.
module.exports = mongoose.model('Nerd', {
	name : {type: String, default: ''}
});