const express = require('express')
const { getProducts, getCart } = require('../controller/productController')
const router = express.Router()

router.route('/products').get(getProducts)
router.route('/cart').get(getCart)
module.exports = router