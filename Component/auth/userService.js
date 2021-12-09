const User = require('./userModel');
const bcrypt = require("bcrypt");

exports.findByUsername = (username) =>{
    const user = User.findOne({
        username:username
    });
    return user;
}

exports.validPassword = async (password,user) => {

    // console.log(bcrypt.hash(password,10));
    return  bcrypt.compare(password,user.password);
}

exports.register = async (username,password,firstname,lastname,phone) =>{
    const passwordHash = await bcrypt.hash(password,10);
    return User.create({
            username: username,
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            password:passwordHash
    })
}