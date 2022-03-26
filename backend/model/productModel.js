const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: [ true, "Please provide a description of a product." ]
	},
	price: {
		type: Number,
		required: [ true, "Please provide the selling price." ],
		maxLength: [ 8, "Price cannot exeed 8 characters." ]
	},
	rating: {
		type: Number,
		default: 0
	},
	images: [ { publicId: { type: String, required: true }, url: { type: String, required: true } } ],
	category: {
		type: String,
		required: [ true, "Please enter the product category." ]
	},
	stock: {
		type: Number,
		required: [ true, "Please provide the product stock." ]
	},
	numOfReviews: {
		type: Number,
		default: 0
	},
	review: [ { name: { type: String, required: true }, rating: { type: Number, required: true }, comment: { type: String, required: true } } ],
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('Product', productSchema)