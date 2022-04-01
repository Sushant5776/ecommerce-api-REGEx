const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use('/', (req, res, next) => {
	console.log(`req from ${ req.path }, ${ req.body }`)
	// res.status(200).json({ name: 'Sushant' })
	// res.send({ name: 'Sushant' })
	next()
})

const productRoutes = require('./routes/productRoutes')
app.use('/api/v1', productRoutes)

module.exports = app