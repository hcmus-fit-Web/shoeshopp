const userService = require('./userService');

exports.login = (req,res) =>{
    const wrongPassword = req.query['wrong-password'] !== undefined;
    res.render('login',{wrongPassword});
}

exports.info = (req,res) =>{
    res.render('account');
}

exports.logout = (req,res)=> {
    req.logout();
    res.redirect('/');
}
exports.signup = async (req,res)=>{
    const {username,password,firstname,lastname,phone} = req.body;
    const user =  await userService.register(username,password,firstname,lastname,phone);
    res.redirect('/login');
}