const service = require('../services/docentes.service');

//FUNCIÓN PARA CONTROLAR LAS PETICIONES DESDE EL CONTROLLER
async function getAllDocentesCtrl(req, res, next) {
    try {
        const data = await service.getAllDocentesService();
        res.status(200).json(
            { ok: true, data }
        );
    } catch (e) { next(e); }
}

//Función para obtener docente por ID
async function getByIdDocenteCtrl(req, res, next) {
    try {
        const data = await service.getAllDocentesByIdService(req.params.id);
        res.status(200).json(
            { ok: true,
                data:data
            }
        );
    } catch (e) { next(e) }
}

async function createDocenteCtrl(req, res, next) {
    try {
        const id = await service.createDocenteService(req.body);
        res.status(200).json(
            { ok: true,
                id,
                message: 'Docente creado'
            }
        );
    } catch (e) { next(e); }
}

async function updateDocenteCtrl(req, res, next) {
    try {
        await service.updatedocenteService(req.params.id, req.body);
        res.json(
            { ok: true,
                message: 'Docente actualizado'
            }
        );
    } catch (e) { next(e); }
}

async function removeDocenteCtrl(req, res, next) {
    try {
        await service.removeDocenteService(req.params.id);
        res.json(
            { ok: true,
                message: 'Docente eliminado'
            }
        );
    } catch (e) { next(e); }
}

module.exports = { getAllDocentesCtrl, getByIdDocenteCtrl, createDocenteCtrl, updateDocenteCtrl, removeDocenteCtrl }
