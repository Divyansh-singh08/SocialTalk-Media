const express = require("express");

const router = express.Router();
//require the passportJs
const passport = require("passport");

const usersController = require("../controllers/users_controller");

// //map the usersController with users Router
// router.get("/profile", usersController.profile);

//map the usersController with users Router with passport js
router.get("/profile", passport.checkAuthentication, usersController.profile);

router.get("/sign-up", usersController.signUp);

router.get("/sign-in", usersController.signIn);

//need to track for the ejs form files
router.post("/create", usersController.create); //this is fetching from the user_controller.js

//this will be handle by the passportJS so middleware is in middle added as passport.authentication function
router.post(
	"/create-session",
	//if it true then goes to usersController otherwise redirect
	passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
	usersController.createSession
);

router.get("/sign-out",usersController.destroySession);

module.exports = router;
