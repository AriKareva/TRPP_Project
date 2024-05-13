const dotenv = require('dotenv')
dotenv.config()
const models = require('./models/models.js')
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index.js')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


// app.get('/', (req, res) => {
//     res.status(200).send({ message: "МАМА Я КРУТОЙ БЭКЕНДЕР!!!" })
// })

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