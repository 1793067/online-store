const Router = require('express');
const typeController = require('../controllers/typeController');
const router = new Router();
const checkRole = require('../middleWare/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create) // добавлять типы может только пользователь с правами ADMIN
router.get('/', typeController.getAll)


module.exports = router;