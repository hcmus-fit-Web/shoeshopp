
const Product = require('../product/productModel');
// const {skips} = require("debug");
const PAGE_SIZE = 6;
exports.list = (page) => {

    return new Promise((resolve,reject) => {

        if (page) {
            page = parseInt(page);
            if(page<1) page = 1;
            var skip = (page - 1) * PAGE_SIZE;
            Product.find({}).skip(skip).limit(PAGE_SIZE).lean()
                .then(data => {

                    resolve(data)

                })
                .catch(err => reject(new Error(err)))
        } else {

            page = 1;
            var skip = (page - 1) * PAGE_SIZE;
            Product.find({}).skip(skip).limit(PAGE_SIZE).lean()
                .then(data => {

                    resolve(data)

                })
                .catch(err => reject(new Error(err)))
        }
    })
}

