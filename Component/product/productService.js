
const Product = require('../product/productModel');
exports.list = () => Product.find({}).lean();