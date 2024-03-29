const { Favorite } = require('../DB_connection');
const { User } = require("../DB_connection");

module.exports = async(req, res)=>{

    try {
        const { name, origin, status, image, species, gender } = req.body;

        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send("Faltan datos.");
        }

        const userId = req.params.userId

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).send("Usuario no encontrado.");
        }
        console.log(user)
        const favorite = await Favorite.findOrCreate({
            where: {
                name,
                origin,
                status,
                image,
                species,
                gender,
            },
        });
        
        await user.addFavorite(favorite);

        const allFavorites = await Favorite.findAll();
        return res.json(allFavorites);

    } catch (error) {
        return res.status(500).send(error.message);
    }

};