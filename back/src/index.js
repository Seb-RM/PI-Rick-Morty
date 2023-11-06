const data = require('./utils/data');
const  http = require("http");
const {getCharacterById} = require('./controllers/getCharactersById')

http
    .createServer((request, response) => {
        response.setHeader("Access-Control-Allow-Origin", "*");

        if (request.url.includes("/rickandmorty/character")) {
        const id = request.url.split("/").at(-1);

        getCharacterById(response, +id);
        }
    })
    .listen(3001, "localhost");