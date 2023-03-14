const express = require('express');

const router = express.Router();


const usersController = require('../controllers/users_controller');

//map the usersController with users Router
router.get('/profile',usersController.profile);
module.exports = router;