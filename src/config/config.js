const dotenv = require('dotenv');
dotenv.config();

// Imprimir las variables de entorno para verificar que se están cargando correctamente
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_NAME}`,  // Aquí debe estar el nombre de la base de datos (bdd_t3)
    "host": process.env.DB_HOST,
    "port": 5433,  // Puerto correcto
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_NAME}_test`,  // Base de datos de prueba
    "host": process.env.DB_HOST,
    "port": 5433,  // Puerto correcto
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_NAME}_production`,  // Base de datos de producción
    "host": process.env.DB_HOST,
    "port": 5433,  // Puerto correcto
    "dialect": "postgres",
  }
}
