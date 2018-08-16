var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	telnum: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	agree: {
		type: Boolean,
		required: true
	},
	contacttype: {
		type: String
	},
	message: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

var Feedback = mongoose.model('Feedback',feedbackSchema);

module.exports = Feedback;