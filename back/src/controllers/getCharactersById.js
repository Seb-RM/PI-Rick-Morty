const  axios  = require('axios');


//const APIKEY = "pi-seb-rm";
//const URL = `https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`; se debería usar separando la url
//const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = async (request, response)=> {
    // const { id} = request.params;

    // axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`)
        //.then(({ data }) => {
            // .then((response)=> response.data)
            // .then(({name,status,origin,image,gender,species})=>{
            //     if(id){
            //         const character = {
            //                         id,
            //                         name,
            //                         status,
            //                         origin,
            //                         image,
            //                         gender,
            //                         species
            //                     };
            //         return response.status(200).json(character);
            //     }
            //     return response.status(404).send("Not found");
            // })
        //     if (data.id) {
        //     const character = {
        //         id,
        //         name: data.name,
        //         status: data.status,
        //         origin: data.origin,
        //         image: data.image,
        //         gender: data.gender,
        //         species: data.species,
        //     };

        //     return response.status(200).json(character);
        //     }
        //     return response.status(404).send("Not found");
        // })
        // .catch((error) => {
        // //     return response.status(500).send(error.message);
        // });
    try {
        const {id} = request.params;
        const {data} = await axios.get(
            `https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`
        );

        const character = {
                id,
                name: data.name,
                status: data.status,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                species: data.species,
            };

        return response.status(200).json(character);

    } catch (error) {
        return response.status(500).send(error.message);
    }
};

module.exports ={
    getCharById
}