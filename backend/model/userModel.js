const mongoose = require('mongoose')

const userModel = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	userName: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		city: { type: String },
		country: { type: String },
		zip: { type: String },
	},
	phone: {
		type: String,
	},
	age: {
		type: Number,
	},
	password: {
		type: { type: String },
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('User', userModel)