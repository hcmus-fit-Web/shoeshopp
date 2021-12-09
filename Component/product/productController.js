
const ProductService = require('./productService');



exports.list = async function (req ,res){
    const page = req.query.page;
    const products = await ProductService.list(page,req.query);
    const type = await ProductService.type();
    const discount = await ProductService.discount();


    res.locals.type = type;
    res.locals.discount = discount;
    res.locals.products = products;
    res.render('list');
};

