const pool = require('../db/mysql');

async function findAllCursosRepo() {
    const [rows] = await pool.query('SELECT * FROM curso ORDER BY id_curso DESC');
    return rows;
}

async function findByIdCursosRepo(id) {
    const [rows] = await pool.query(`SELECT * FROM curso WHERE id_curso = ${id}`);
    return rows[0] || null;
}

async function createCursosRepo(data) {
    const sql = `
    INSERT INTO curso (id_curso, nombre_curso, periodo_academico, horario, aula)
    VALUES (?, ?, ?, ?, ?)
`;
const params = [
    data.id_curso,
    data.nombre_curso,
    data.periodo_academico,
    data.horario,
    data.aula
];

const [result] = await pool.query(sql, params);
return result.insertId;
}

async function updateCursosRepo(id, data) {
    const sql = `
    UPDATE curso
    SET nombre_curso = ?, periodo_academico = ?, horario = ?, aula = ?
    WHERE id_curso = ?
`;
const params = [
    data.nombre_curso,
    data.periodo_academico,
    data.horario,
    data.aula,
    id
];

const [result] = await pool.query(sql, params);
return result.affectedRows;
}

async function removeCursosrepo(id) {
    const [result] = await pool.query(`DELETE FROM curso WHERE id_curso = ${id}`);
    return result.affectedRows;
}


module.exports = { findAllCursosRepo, findByIdCursosRepo, createCursosRepo, updateCursosRepo, removeCursosrepo }