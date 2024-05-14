const dotenv = require('dotenv')
dotenv.config()
const models = require('./models/models.js')
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandlerMiddleware.js')
// const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
// app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler) 


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server starts on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()