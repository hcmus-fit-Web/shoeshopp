const singleService = require('./singleService');

exports.one = async function (req ,res){
    const id = req.params.id;
    const product = await singleService.one(id);

    const products = await singleService.list();
    res.locals.product = product;
    res.locals.products = products;
    res.render('single');
};
