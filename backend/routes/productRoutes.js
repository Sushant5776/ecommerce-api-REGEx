const express = require('express')
const { getProducts, createProduct } = require('../controller/productController')
const router = express.Router()

router.route('/products').post(createProduct).get(getProducts)

module.exports = router