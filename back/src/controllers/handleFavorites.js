
let  myFavorites = [];

const postFav= (request, response)=>{
    const character = request.body;
    const characterRepeated = myFavorites.find((favorite)=>{
        return favorite.id == character.id
    });
    
    if(!characterRepeated) myFavorites.push(character);

    return response.status(200).json(myFavorites);
};

const deleteFav = (request, response) => {
    const {id}= request.params;

    const myFavorites = myFavorites.filter((favorite)=> {
        return favorite.id != id;
    });

    return response.status(200).json(myFavorites);
};

module.exports = {
    postFav, deleteFav
}