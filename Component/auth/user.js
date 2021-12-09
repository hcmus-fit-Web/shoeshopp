const express = require('express');
const router = express.Router();

const userController = require('./userController');
const passport = require("../../passport");
const {loggedInUserGuard} = require("../../middelware/LoggedInUserGuard");

/* GET home page. */

router.get('/logout',userController.logout);
router.get('/login', userController.login);
router.get('/info',loggedInUserGuard,userController.info);
router.post('/login',passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login?wrong-password' })
);
router.post('/signup' ,userController.signup);

module.exports = router;
