async function getProducts(req, res) {
	try {
		console.log('Listing the products api.')
		res.status(200).json({
			message: "route is working fine."
		})
		// next()
	} catch (err) {

	}
}

async function getCart(req, res) {
	try {
		console.log('calling cart api.')
		res.status(200).json({
			message: `returning cart data for user ${ req.query[ 'user' ] }`
		})
	} catch (err) {

	}
}

module.exports = {
	getProducts,
	getCart
}