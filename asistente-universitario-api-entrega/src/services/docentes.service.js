const repo = require('../repositories/docentes.repository');

async function getAllDocentesService () {
    return repo.findAllDocentesRepo();
}

//Función para retornar el docente por ID
async function getAllDocentesByIdService(id) {
    const num = Number(id);
    if (!num || Number.isNaN(num)) {
        const err = new Error('ID inválido');
        err.status = 400;
        throw err;
    }

    const row = await repo.findByIdDocenteRepo(num);
    if (!row) {
        const err = new Error('Docente no encontrado');
        err.status = 400;
        throw err;
    }
    return row;
}

async function createDocenteService(data) {
    if (!data.nombre || !data.apellido || !data.documento || !data.correo || !data.especialidad || !data.estado) {
        const err = new Error('Faltan campos obligatorios');
        err.status = 400;
        throw err;
    }
    const id = await repo.createDocenteRepo(data);
    return id;
}

async function updatedocenteService(id, data) {
    await getAllDocentesByIdService(id);
    const affected = await repo.updateDocenteRepo(Number(id), data);
    return affected;
}

async function removeDocenteService(id) {
    await getAllDocentesByIdService(id);
    const affected = await repo.removeDocenteRepo(Number(id));
    return affected;
}

module.exports = { getAllDocentesService, getAllDocentesByIdService, createDocenteService, updatedocenteService, removeDocenteService }