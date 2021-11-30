const singleService = require('./singleService');

exports.one = async function (req ,res){
    const id = req.params.id;
    const product = await singleService.one(id);
    const products = await singleService.list();

    res.render('single',{product});
};


