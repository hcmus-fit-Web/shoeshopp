
const ProductService = require('./productService');



exports.list = async function (req ,res){
    const page = req.query.page;
    const products = await ProductService.list(page);
    res.render('list',{products});
};

