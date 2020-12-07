const express = require('express');

const router = express.Router();

const homeController =  require('../controllers/home_controller');

const postRouter = require('./posts');

const commentsRouter = require('./comments');

router.use('/posts',postRouter);
const userRouter = require('./users')

router.get('/',homeController.home);

router.use('/users',userRouter);
router.use('/comments',commentsRouter);
router.get('/practice',homeController.practice);


module.exports = router;