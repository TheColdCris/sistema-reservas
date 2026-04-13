const { Router } = require('express');
const ctrl = require('../controllers/notas.controller');

const router =  Router();

router.get('/', ctrl.getAllNotasCtrl);
router.get('/:id', ctrl.getByIdNotasCtrl);
router.post('/', ctrl.createNotasCtrl);
router.put('/:id', ctrl.updateNotasCtrl);
router.delete('/:id', ctrl.removeNotasCtrl);

module.exports = router;