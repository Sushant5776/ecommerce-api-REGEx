const Product = require('../model/productModel')
const bodyParser = require('body-parser')

async function getProducts(req, res) {
	const products = await Product.find()
	try {
		console.log('Listing the products api.')
		res.status(200).json({
			products: products
		})
	} catch (err) {

	}
}

async function createProduct(req, res) {
	const product = await Product.create(req.body)
	res.status(200).json({
		message: product
	})
}

module.exports = {
	getProducts,
	createProduct
}