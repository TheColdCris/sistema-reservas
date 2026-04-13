const service = require('../services/estudiantes.service');

//Obtener todos los estudiantes
async function getAll(req, res, next) {
  try {
    const data = await service.getAll();
    res.json({ ok: true, data });
  } catch (e) { next(e); }
}

//Función para obtener estudiante por ID
async function getById(req, res, next) {
  try {
    // req.params => recibe dato por la url
    const data = await service.getById(req.params.id);
    res.status(200).json(
        { ok: true, 
          data:data }
    );
  } catch (e) { next(e); }
}

//Función para crear un estudiante
async function create(req, res, next) {
  try {
    //req.body => Los datos que llegan por el cuerpo del cliente (JSON)
    const id = await service.create(req.body);
    res.status(201).json(
        { ok: true,
          id, 
          message: 'Estudiante creado' }
    );
  } catch (e) { next(e); }
}

//Función actualizar estudiante por ID
async function update(req, res, next) {
  try {
    await service.update(req.params.id, req.body);
    res.json({ ok: true, message: 'Estudiante actualizado' });
  } catch (e) { next(e); }
}

//Función para eliminar estudiantes por ID
async function remove(req, res, next) {
  try {
    await service.remove(req.params.id);
    res.json({ ok: true, message: 'Estudiante eliminado' });
  } catch (e) { next(e); }
}

module.exports = { getAll, getById, create, update, remove };
