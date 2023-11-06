const users = require('../utils/user')

const login = (request, response)=>{
    const {email, password} = request.query;
    const userFound = users.find((user)=> user.email === email && user.password === password);

    if(userFound) return response.status(200).json({'access': true});

    return response.status(404).json({'access': false});
};

module.exports ={
    login
}