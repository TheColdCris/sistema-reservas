const pool = require('../db/mysql');

async function findAll() {
  const [rows] = await pool.query('SELECT * FROM estudiante ORDER BY id_estudiante DESC');
  return rows;
}

async function findById(id) {
  const [rows] = await pool.query('SELECT * FROM estudiante WHERE id_estudiante = ?', [id]);
  return rows[0] || null;
}

async function create(data) {
  const sql = `
    INSERT INTO estudiante (id_estudiante, nombre, apellido, documento, correo, carrera, semestre_actual, telefono)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [
    data.id_estudiante, 
    data.nombre, 
    data.apellido, 
    data.documento,
    data.correo,    
    data.carrera,    
    data.semestre_actual,
    data.telefono || null
  ];

  const [result] = await pool.query(sql, params);
  return result.insertId;
}

async function update(id, data) {
  const sql = `
    UPDATE estudiante
    SET nombre = ?, apellido = ?, documento = ?, correo = ?, carrera = ?, semestre_actual = ?, telefono = ?
    WHERE id_estudiante = ?
  `;
  const params = [
    data.nombre, 
    data.apellido, 
    data.documento,
    data.correo,    
    data.carrera,
    data.semestre_actual,
    data.telefono,
    id
  ];

  const [result] = await pool.query(sql, params);
  return result.affectedRows;
}

async function remove(id) {
  const [result] = await pool.query('DELETE FROM estudiante WHERE id_estudiante = ?', [id]);
  return result.affectedRows;
}

module.exports = { findAll, findById, create, update, remove };