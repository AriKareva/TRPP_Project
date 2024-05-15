const uuid = require('uuid')
const path = require('path')
const {Item} = require('../models/models.js')
const apiError = require('../error/apiError.js')

class ItemController{

    async create(req, res, next){
        try{
            const {name, price, typeID, info} = req.body
            const{img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const item = await Item.create({typeID, name, price, img: fileName})

            return res.json(item)
            
        } catch (e){
            next(apiError.failRequest(e.message))
        }
    }

    async getAll(req, res){

    }

    async getItem(req, res){

    }

}

module.exports = new ItemController()