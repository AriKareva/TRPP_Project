const Router = require('express')
const router = new Router()
const itemController = require('../controllers/ItemController.js')

router.post('/', itemController.create)
router.get('/', itemController.getAll)
router.get('/:id', itemController.getItem)

module.exports = router