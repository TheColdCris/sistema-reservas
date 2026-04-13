const { Router } = require('express');
const ctrl = require('../controllers/materias.controller');

const router = Router();

router.get('/', ctrl.getAllMateriasCtrl);
router.get('/:id', ctrl.getByidMateriasCtrl);
router.post('/', ctrl.createMateriasCtrl);
router.put('/:id', ctrl.updateMateriasCtrl);
router.delete('/:id', ctrl.removeMateriasCtrl);

module.exports = router;