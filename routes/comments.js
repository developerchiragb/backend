const express = require('express');
const commentController = require('../controllers/comments_controller');
const router = express.Router();
const passport = require('passport');
router.post('/create',passport.checkAuthentication,commentController.create);

module.exports = router;