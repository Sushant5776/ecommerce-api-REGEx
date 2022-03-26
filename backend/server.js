const app = require('./app')
const dotenv = require('dotenv')
const { connectDatabase } = require('./database/mongo')

dotenv.config({ path: 'backend/config/config.env' })


// connection to the database
connectDatabase()

app.listen(process.env.PORT, () => console.log(`Server started listening on port ${ process.env.PORT }.`))