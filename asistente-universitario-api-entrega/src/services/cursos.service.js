const repo = require('../repositories/cursos.repository');

async function getAllCursosService() {
    return repo.findAllCursosRepo();
}

async function getAllCursosByIdService(id) {
    const num = Number(id);
    if (!num || Number.isNaN(num)) {
        const err = new Error('ID inválido');
        err.status = 400;
        throw err;
    }

    const row = await repo.findByIdCursosRepo(num);
    if (!row) {
        const err = new Error('Curso no encontrado');
        err.status = 400;
        throw err;
    }
    return row;
}

async function createCursosService(data) {
    if (!data.nombre_curso || !data.periodo_academico || !data.horario || !data.aula) {
        const err = new Error('Faltan campos obligatorios');
        err.status = 400;
        throw err;
    }
    const id = await repo.createCursosRepo(data);
    return id;
}

async function updateCursosService(id, data) {
    await getAllCursosByIdService(id);
    const affected = await repo.updateCursosRepo(Number(id), data);
    return affected;
}

async function removeCursosService(id) {
    await getAllCursosByIdService(id);
    const affected = await repo.removeCursosrepo(Number(id));
    return affected;
}

module.exports = { getAllCursosService, getAllCursosByIdService, createCursosService, updateCursosService, removeCursosService }