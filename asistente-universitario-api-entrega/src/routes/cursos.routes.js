const { Router } = require('express');
const ctrl = require('../controllers/cursos.controller');

const router = Router();

router.get('/', ctrl.getAllCursosCtrl);
router.get('/:id', ctrl.getByIdCursosCtrl);
router.post('/', ctrl.createCursosCtrl);
router.put('/:id', ctrl.updateCursosCtrl);
router.delete('/:id', ctrl.removeCursosCtrl);

module.exports = router;