const express = require('express');


const router= express.Router();
const carController = require('../controllers/car-controller');
const fileUpload = require('../middleware/file-upload');

router.get('/:cid',carController.carByNumber)

router.get('/',carController.allCars)

router.post('/',fileUpload.single('image'),carController.addCar);

module.exports = router