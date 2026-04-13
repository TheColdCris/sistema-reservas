const pool = require('../db/mysql');

async function findAllMateriasRepo() {
    const [rows] = await pool.query('SELECT * FROM materia ORDER BY id_materia DESC');
    return rows;
}

async function findByIdMateriasRepo(id) {
    const [rows] = await pool.query(`SELECT * FROM materia WHERE id_materia = ${id}`);
    return rows[0] || null;
}

async function createMateriasRepo(data) {
    const sql = `
    INSERT INTO materia (id_materia, nombre_materia, descripcion, creditos)
    VALUES (?, ?, ?, ?)
`;
const params = [
    data.id_materia,
    data.nombre_materia,
    data.descripcion,
    data.creditos
];

    const [result] = await pool.query(sql, params);
    return result.insertId;
}

async function updateMateriasRepo(id, data) {
    const sql = `
    UPDATE materia
    SET nombre_materia = ?, descripcion = ?, creditos = ?
    WHERE id_materia = ?
`;
const params = [
    data.nombre_materia,
    data.descripcion,
    data.creditos,
    id
];

const [result] = await pool.query(sql, params);
return result.affectedRows;
}

async function removeMateriasRepo(id) {
    const [result] = await pool.query(`DELETE FROM materia WHERE id_materia = ${id}`);
    return result.affectedRows;
}


module.exports = { findAllMateriasRepo, findByIdMateriasRepo, createMateriasRepo, updateMateriasRepo, removeMateriasRepo }