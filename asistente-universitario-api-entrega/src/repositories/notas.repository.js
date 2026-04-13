const pool = require('../db/mysql');

async function findAllNotasrepo() {
    const [rows] = await pool.query('SELECT * FROM nota ORDER BY id_nota DESC');
    return rows;
}

async function findByIdNotasRepo(id) {
    const [rows] = await pool.query(`SELECT * FROM nota WHERE id_nota = ${id}`);
    return rows[0] || null;
}

async function createNotasRepo(data) {
    const sql = `
    INSERT INTO nota (id_nota, nota_final, observaciones, fecha_registro)
    VALUES (?, ?, ?, ?)
`;
const params = [
    data.id_nota,
    data.nota_final,
    data.observaciones,
    data.fecha_registro
];

const [result] = await pool.query(sql, params);
return result.insertId;
}

async function updateNotasRepo(id, data) {
    const sql = `  
    UPDATE nota
    SET nota_final = ?, observaciones = ?, fecha_registro = ?
    WHERE id_nota = ?
`;
const params = [
    data.nota_final,
    data.observaciones,
    data.fecha_registro,
    id
];

const [result] = await pool.query(sql, params);
return result.affectedRows;
}

async function removeNotasrepo(id) {
    const [result] = await pool.query(`DELETE FROM nota WHERE id_nota = ${id}`);
    return result.affectedRows;
}

module.exports = { findAllNotasrepo, findByIdNotasRepo, createNotasRepo, updateNotasRepo, removeNotasrepo }