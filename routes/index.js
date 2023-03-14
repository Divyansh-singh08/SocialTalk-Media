//enter point of all the routes
//every time when we create express it will not make new instance
//it will just fetch the existing instance
const express = require('express');

//this will help in separate myApp.router and my controller
const router = express.Router();

console.log('router loaded');
// router.get('/',(req,res)=>{})

//****************************************************************************** */
//get from controller home_controller
//fetching from controller
const homeController = require('../controllers/home_controller');


//get from controller home_controller
router.get('/',homeController.home);

//i want that this will be the main head of all routes in routes file
//so for that i will do access to the users.js
router.use('/users',require('./users'));


//$$$$$$$$$$$$$$EXAMPLE$$$$$$$$$$$$$$$$$$$$$$
//for any other routers, access form here
//router.use('/routerName',require('./routerFile'));

//#@@@@@@@@@@@@@@@@@ Post use
//use post_controller.js
router.use('/post_controller',require('./post_controller'));

// This will export to the index.js so that it will be use by
//index.js
module.exports = router;