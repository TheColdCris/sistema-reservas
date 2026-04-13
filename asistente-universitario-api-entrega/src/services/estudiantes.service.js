const repo = require('../repositories/estudiantes.repository');

async function getAll() {
  return repo.findAll();
}

async function getById(id) {
  const num = Number(id);
  if (!num || Number.isNaN(num)) {
    const err = new Error('ID inválido');
    err.status = 400;
    throw err;
  }

  const row = await repo.findById(num);
  if (!row) {
    const err = new Error('Estudiante no encontrado');
    err.status = 404;
    throw err;
  }
  return row;
}

async function create(data) {
  // Validaciones mínimas
  if (!data.nombre || !data.apellido || !data.documento || !data.correo || !data.carrera || !data.semestre_actual || !data.telefono) {
    const err = new Error('Faltan campos obligatorios');
    err.status = 400;
    throw err;
  }
  const id = await repo.create(data);
  return id;
}

async function update(id, data) {
  await getById(id); // valida que existe
  const affected = await repo.update(Number(id), data);
  return affected;
}

async function remove(id) {
  await getById(id); // valida que existe
  const affected = await repo.remove(Number(id));
  return affected;
}

module.exports = { getAll, getById, create, update, remove };