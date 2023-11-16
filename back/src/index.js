const express = require("express");
const server = express();

const {router} =require('./routes/index');
const PUERTO = 3001;

const { conn, User } = require('./DB_connection');


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
conn.sync({ force: true }).then(()=>{
    server.listen(PUERTO, () => {
        console.log("Servidor funcionando en: " + PUERTO);
    });
})
// conn.sync({ force: true })
// server.listen(PUERTO, () => {
//         console.log("Servidor funcionando en: " + PUERTO);
// })
.then(async()=>{try {
    const userTest = await User.create({
        id:1,
        email:"ejemplo@gmail.com",
        password:"Password1"
    })
    console.log("Salio bien: ", userTest.toJSON());
    } catch(error){
        console.log("Se encontró un fallo: ", error);
    }
})
//.catch((error)=>{console.log("Error al conectar: ", error)});