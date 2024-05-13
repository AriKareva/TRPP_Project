require('dotenv').config()
const models = require('./models/models.js')
const express = require('express')
const sequelize = require('./db')

const PORT = process.env.PORT || 5000

const app = express()

const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server starts on port ${PORT }`))
    } catch (e) {
        console.log(e)
    }
}


start()