const repo = require('../repositories/materias.repository');

async function getAllMateriasService() {
    return repo.findAllMateriasRepo();
}

async function getAllMateriasByIdService(id) {
    const num = Number(id);
    if (!num || Number.isNaN(num)){
        const err = new Error('ID inválido');
        err.status = 400;
        throw err;
    }

    const row = await repo.findByIdMateriasRepo(num);
    if (!row) {
        const err = new Error('Materia no encontrada');
        err.status = 400;
        throw err;
    }
    return row;
}

async function createMateriasService(data) {
    if (!data.nombre_materia || !data.descripcion || !data.creditos) {
        const err = new Error('Faltan campos obligatorios');
        err.status = 400;
        throw err;
    }
    const id = await repo.createMateriasRepo(data);
    return id;
}

async function updateMateriasService(id, data) {
    await getAllMateriasByIdService(id);
    const affected = await repo.updateMateriasRepo(Number(id), data);
    return affected;
}

async function removeMateriasService(id) {
    await getAllMateriasByIdService(id);
    const affected = await repo.removeMateriasRepo(Number(id));
    return affected;
}

module.exports = { getAllMateriasService, getAllMateriasByIdService, createMateriasService, updateMateriasService, removeMateriasService }