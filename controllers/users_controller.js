const User = require("../models/user");

module.exports.profile = (req, res) => {
	return res.render("user_profile", {
		title: "User_Profile",
	});
	// return res.end(`<h1>Yeah this  is the profile work shown here now </h1>`);
};

// Sign Up render
//for the render from backend we fetching
//the data from the view file through the ejs
module.exports.signUp = async function (req, res) {
	// if they already signUP so go to profile page
	if (req.isAuthenticated()) {
		return await res.redirect("/users/profile");
	}

	return await res.render("user_sign_up", {
		title: "CodeTalk || Sign Up",
	});
};

// Sign In render
module.exports.signIn = async function (req, res) {
	// if they already sign in so go to profile page
	if (req.isAuthenticated()) {
		return await res.redirect("/users/profile");
	}

	return await res.render("user_sign_in", {
		title: "Code Talk | Sign In",
	});
};

//get the signUp data create for playing with signIn data
// module.exports.create = function (req, res) {
//     //todo later
// 	//1 check is password and confirm password is equal or not
// 	if(req.body.password != req.body.confirmPassword){
// 		return res.redirect('back');//form where it came
// 	}

// 	User.findOne({email:req.body.email},function(err, user){
// 		try{

// 			if(err){
// 				console.log(`error in finding the user signing up`);
// 				return;
// 			}

// 			//if user is not found then create user
// 			 if(!user){
// 				 User.create(req.body,function(err,user){
// 					if(err){
// 						console.log(`creating user while signIN up`);
// 						return;
// 					}
// 					return res.redirect('/users/sign-in');///users/sign-in this is going the router
// 				})
// 			 }else{
// 				return res.redirect('back')
// 			 }

// 			 //now if user is already present

// 		}catch(err){
// 			console.log(err);
// 		}
// 	})
// }

module.exports.create = async function (req, res) {
	try {
		//sign up page
		// 1. Check if password and confirmPassword are equal
		if (req.body.password != req.body.confirm_password) {
			return res.redirect("back");
		}

		// 2. Check if the user already exists
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			// 3. Create the user
			const createdUser = await User.create(req.body);
			return res.redirect("/users/sign-in");
		} else {
			return res.redirect("back");
		}
	} catch (error) {
		console.log(error);
		return res.redirect("back");
	}
};

//now we well deal with create-session playing with signUp data
//sign in and create a session for the user
module.exports.createSession = async function (req, res) {
	//todo Later
	try {
		return await res.redirect("/");
	} catch (error) {
		console.log(error);
	}
};


//
module.exports.destroySession = async function (req, res) {
	//before redirecting we need to signOut
	req.logout(function(err){
		if(err){
			return next(err);
		}
		res.redirect("/");
	});

}