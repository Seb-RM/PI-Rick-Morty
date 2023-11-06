const axios = require ('axios');

const getCharById = (resp, id) =>{
    axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`)
    .then((response)=>response.data)
    .then(({name, gender, origin, image, status,id ,species})=>{
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            status,
            image
        }
    })
    resp.writeHead(200, {'Content-type':'application/json'})
    resp.end(JSON.stringify(character))
        
        .catch((error)=> resp.writeHead(500, {'Content-type': 'text/plain'})
                        .end('No hay Data'))
};

module.exports = {
    getCharById
}