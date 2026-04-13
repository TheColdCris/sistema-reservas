require('dotenv').config();

//Configuración de la conexión a la BBDD
module.exports = {
  port: process.env.PORT || 3000,
  mysql: {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
};