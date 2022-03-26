const mongoose = require('mongoose')

const orderModel = mongoose.Schema({
	userName: {
		type: String,
		required: true
	},
	productId: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	quantity: {
		type: Number,
		default: 1,
	},
	totalAmount: {
		type: Number,
	},
	status: {
		type: String,
	},
})
