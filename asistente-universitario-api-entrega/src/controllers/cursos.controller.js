const service = require('../services/cursos.service');

async function getAllCursosCtrl(req, res, next) {
    try {
        const data = await service.getAllCursosService();
        res.status(200).json(
            { ok: true, data }
        )
    } catch (e) { next(e) }
}

async function getByIdCursosCtrl(req, res, next) {
    try {
        const data = await service.getAllCursosByIdService(req.params.id);
        res.status(200).json(
            { ok: true,
                data:data
            }
        );
    } catch (e) { next(e) }
}

async function createCursosCtrl(req, res, next) {
    try {
        const id = await service.createCursosService(req.body);
        res.status(200).json(
            { ok: true,
                id,
                message: 'Curso creado'
            }
        );
    } catch (e) { next(e) }
}

async function updateCursosCtrl(req, res, next) {
    try {
        await service.updateCursosService(req.params.id, req.body);
        res.json(
            { ok: true,
                message: 'Curso actualizado'
            }
        )
    } catch (e) { next(e) }
}

async function removeCursosCtrl(req, res, next) {
    try {
        await service.removeCursosService(req.params.id);
        res.json(
            { ok: true,
                message: 'Curso eliminado'
            }
        )
    } catch (e) { next(e) }
}

module.exports = { getAllCursosCtrl, getByIdCursosCtrl, createCursosCtrl, updateCursosCtrl, removeCursosCtrl }