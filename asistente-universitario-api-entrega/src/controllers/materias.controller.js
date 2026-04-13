const service = require('../services/materias.service');

async function getAllMateriasCtrl(req, res, next) {
    try {
        const data = await service.getAllMateriasService();
        res.status(200).json(
            { ok: true, data }
        );
    } catch (e) { next(e) }
}

async function getByidMateriasCtrl(req, res, next) {
    try {
        const data = await service.getAllMateriasByIdService(req.params.id);
        res.status(200).json(
            { ok: true, data:data }
        );
    } catch (e) { next(e) }
}

async function createMateriasCtrl(req, res, next) {
    try {
        const id = await service.createMateriasService(req.body);
        res.status(200).json(
            { ok: true,
                id,
                message: 'Materia creada'
            }
        );
    } catch (e) { next(e) }
}

async function updateMateriasCtrl(req, res, next) {
    try {
        await service.updateMateriasService(req.params.id, req.body);
        res.json(
            { ok: true,
                message: 'Materia actualizada'
            }
        );
    } catch (e) { next(e) }
}

async function removeMateriasCtrl(req, res, next) {
    try {
        await service.removeMateriasService(req.params.id);
        res.json(
            { ok: true,
                message: 'Materia eliminada'
            }
        )
    } catch (e) { next(e) }
}

module.exports = { getAllMateriasCtrl, getByidMateriasCtrl, createMateriasCtrl, updateMateriasCtrl, removeMateriasCtrl }