const repo = require('../repositories/notas.repository');

async function getAllNotasService() {
    return repo.findAllNotasrepo();
}

async function getAllNotasByIdService(id) {
    const num = Number(id);
    if (!num || Number.isNaN(num)) {
        const err = new Error('ID inválido');
        err.status = 400;
        throw err;
    }

    const row = await repo.findByIdNotasRepo(num);
    if (!row) {
        const err = new Error('Nota no encontrado');
        err.status = 400;
        throw err;
    }
    return row;
}

async function createNotasService(data) {
    if (!data.nota_final || !data.observaciones || !data.fecha_registro) {
        const err = new Error('Faltan campos obligatorios');
        err.status = 400;
        throw err;
    }
    const id = await repo.createNotasRepo(data);
    return id;
}

async function updateNotasService(id, data) {
    await getAllNotasByIdService(id);
    const affected = await repo.updateNotasRepo(Number(id), data);
    return affected;
}

async function removeNotasService(id) {
    await getAllNotasByIdService(id);
    const affected = await repo.removeNotasrepo(Number(id));
    return affected;
}

module.exports = { getAllNotasService, getAllNotasByIdService, createNotasService, updateNotasService, removeNotasService }