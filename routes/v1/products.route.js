const express = require('express');
const productController = require('../../controllers/products.controller');
const viewCount = require('../../middleware/viewCount');

const router = express.Router();



router
    .route('/:id')
    .get(viewCount, productController.getProduct)


router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct)




module.exports = router;