require('dotenv').config();

const app = require('./app');
const db = require('./models');
// const dotenv = require('dotenv');
const Router = require('koa-router');


// Registra las rutas
const Koa = require('koa');
const app1 = new Koa();
const userRoutes = require('./routes');
// Registra las rutas
app1.use(userRoutes.routes());
app1.use(userRoutes.allowedMethods());
const dbPassword = process.env.DB_PASSWORD; // Suponiendo que la contraseña está encriptada
const clave = dbPassword.toString(); // Reemplaza con la sal que usaste para encriptar

const plaintextPassword = bcrypt.compareSync(dbPassword, salt);
// dotenv.config();
const Sequelize = require('sequelize');
// const PORT = process.env.PORT || 3000;
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, clave, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
  });
/*
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        app.listen(PORT, (error) => {
            if (error) {
                return console.error("Error: ", error);
            }
            console.log(`Listening on port ${PORT}`);
            return app;
        })
    })
    .catch((error) => { console.log('Unable to connect to the database:', error); });
    */
    app.listen(3000, () => {
        console.log('Servidor Koa escuchando en el puerto 3000');
      });