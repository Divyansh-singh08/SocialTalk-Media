const express = require('express');

const router = express.Router();


const usersController = require('../controllers/users_controller');

//map the usersController with users Router
router.get('/profile',usersController.profile);

router.get('/sign-up',usersController.signUp);

router.get('/sign-in',usersController.signIn);


//need to track for the ejs form files
router.post('/create',usersController.create);//this is fetching from the user_controller.js

module.exports = router;