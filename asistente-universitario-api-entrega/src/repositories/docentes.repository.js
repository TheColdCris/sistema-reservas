const pool = require('../db/mysql');

//FUNCIÓN PARA OBTENER TODOS LOS DOCENTES
async function findAllDocentesRepo() {
    const [rows] = await pool.query('SELECT * FROM docente ORDER BY id_docente DESC');
    return rows;
}

//Función para obtener docente por ID
async function findByIdDocenteRepo(id) {
    const [rows] = await pool.query(`SELECT * FROM docente WHERE id_docente = ${id}`);
    return rows[0] || null;
}

async function createDocenteRepo(data) {
    const sqlRepo = `
    INSERT INTO docente (id_docente, nombre, apellido, documento, correo, especialidad, estado)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`;
const params = [
    data.id_docente,
    data.nombre,
    data.apellido,
    data.documento,
    data.correo,
    data.especialidad,
    data.estado
];

const [result] = await pool.query(sqlRepo, params);
return result.insertId;
}

async function updateDocenteRepo(id, data) {
    const sql = `
    UPDATE docente
    SET nombre = ?, apellido = ?, documento = ?, correo = ?, especialidad = ?, estado = ?
    WHERE id_docente = ?
`;
const params = [
    data.nombre,    
    data.apellido,
    data.documento,
    data.correo,
    data.especialidad,
    data.estado,
    id
];

const [result] = await pool.query(sql, params);
return result.affectedRows;
}

async function removeDocenteRepo(id) {
    const [result] = await pool.query(`DELETE FROM docente WHERE id_docente = ${id}`);
    return result.affectedRows;
}

module.exports = { findAllDocentesRepo, findByIdDocenteRepo, createDocenteRepo, updateDocenteRepo, removeDocenteRepo }