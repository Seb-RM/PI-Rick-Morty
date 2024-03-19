// const users = require('../utils/user')

// const login = (request, response)=>{
//     const {email, password} = request.query;
//     const userFound = users.find((user)=> user.email === email && user.password === password);

//     if(userFound) return response.status(200).json({'access': true});

//     return response.status(404).json({'access': false});
// };

// module.exports ={
//     login
// }
const {User} = require("../DB_connection");

module.exports = async(req, res)=>{
    try {
        const { email, password } = req.query;

        if(!email || !password) return res.status(400).send("Faltan datos.");

        const user = await User.findOne({where:{email}});

        if(!user) return res.status(404).send("Usuario no encontrado.");

        const userId = user.dataValues.id
        return user.password === password
            ? res.json({access: true, userId})
            : res.status(403).send("Contraseña Incorrecta.");

    } catch (error) {
        return res.status(500).send(error.message);
    }
}