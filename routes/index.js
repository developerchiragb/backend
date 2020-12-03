const express = require('express');

const router = express.Router();

const homeController =  require('../controllers/home_controller');

const userRouter = require('./users')

router.get('/',homeController.home);

router.use('/users',userRouter);

router.get('/practice',homeController.practice);

module.exports = router;