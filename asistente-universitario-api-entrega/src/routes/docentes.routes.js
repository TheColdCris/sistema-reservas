const { Router } = require('express');
const ctrl = require('../controllers/docentes.controller');

const router = Router(); // Instanciamos la clase Router de express

router.get('/', ctrl.getAllDocentesCtrl);
router.get('/:id', ctrl.getByIdDocenteCtrl);
router.post('/', ctrl.createDocenteCtrl);
router.put('/:id', ctrl.updateDocenteCtrl);
router.delete('/:id', ctrl.removeDocenteCtrl);

module.exports = router; // Exportamos los metodos del router