var express = require('express');
var router = express.Router();
var productController = require('./productController');

/* GET home page. */
router.get('/', productController.list);

module.exports = router;
