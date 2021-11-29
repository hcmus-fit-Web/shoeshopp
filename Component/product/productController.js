
const ProductService = require('./productService');

exports.list = async function (req ,res){
    const products = await ProductService.list();
    res.render('list',{products});
};