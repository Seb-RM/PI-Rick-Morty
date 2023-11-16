const express = require("express");
const server = express();

const {router} =require('./routes/index');
const PUERTO = 3001;

const { conn } = require('./DB_connection');

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

server.use(express.json());

server.use('/rickandmorty', router);

// también funciona asi.
// conn.sync({ force: true }).then(()=>{
//     server.listen(PUERTO, () => {
//         console.log("Servidor funcionando en: " + PUERTO);
//     });
// });
conn.sync({ force: true });
server.listen(PUERTO, () => {
        console.log("Servidor funcionando en: " + PUERTO);
});