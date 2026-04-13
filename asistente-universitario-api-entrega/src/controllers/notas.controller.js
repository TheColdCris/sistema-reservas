const service = require('../services/notas.service');

async function getAllNotasCtrl(req, res, next) {
    try {
        const data = await service.getAllNotasService();
        res.status(200).json(
            { ok: true, data }
        )
    } catch (e) { next(e) }
}

async function getByIdNotasCtrl(req, res, next) {
    try {
        const data = await service.getAllNotasByIdService(req.params.id);
        res.status(200).json(
            { ok: true,
                data:data
            }
        )
    } catch (e) { next(e) }
}

async function createNotasCtrl(req, res, next) {
    try {
        const id = await service.createNotasService(req.body);
        res.status(200).json(
            { ok: true,
                id,
                message: 'Nota creada'
            }
        );
    } catch (e) { next(e) }
}

async function updateNotasCtrl(req, res, next) {
    try {
        await service.updateNotasService(req.params.id, req.body);
        res.json(
            { ok: true,
                message: 'Nota actualizada'
            }
        )
    } catch (e) { next(e) }
}

async function removeNotasCtrl(req, res, next) {
    try {
        await service.removeNotasService(req.params.id);
        res.json(
            { ok: true,
                message: 'Nota eliminada'
            }
        )
    } catch (e) { next(e) }
}

module.exports = { getAllNotasCtrl, getByIdNotasCtrl, createNotasCtrl, updateNotasCtrl, removeNotasCtrl }