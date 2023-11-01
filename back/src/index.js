const data = require('./utils/data');
const  http = require("http");

http.createServer((request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    if (request.url.includes("/rickandmorty/character")) {
        const id = request.url.split("/").at(-1);

        const characterFound = data.find((character) => character.id == id);

        if (characterFound) {
            return response
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(characterFound));
        }

        return response
            .writeHead(404, { "Content-type": "application/json" })
            .end(JSON.stringify({ error: "No existen personajes con ese ID" }));
        }

}).listen(3001, '127.0.0.1')