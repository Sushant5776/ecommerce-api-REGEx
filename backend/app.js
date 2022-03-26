const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
	console.log(`req from ${ req.path }`)
	// res.status(200).json({ name: 'Sushant' })
	// res.send({ name: 'Sushant' })
	next()
})

const productRoutes = require('./routes/productRoutes')
app.use('/api/v1', productRoutes)

module.exports = app