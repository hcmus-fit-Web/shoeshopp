
const Product = require('./singleModel');

exports.one = (id) => Product.findOne({_id: id}).lean();


const PAGE_SIZE = 3;
exports.list = () => Product.find({}).limit(PAGE_SIZE).lean();


