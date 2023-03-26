// the homepage logic where export to the router
module.exports.home = (req, res) => {
	//cookies work
	console.log(req.cookies);
	// return res.end('<h1>Express is ready for codeTalk!!</h1>');
	//i will change the cookies 
	res.cookie('user_id',22);
	return res.render("home", {
		title: "Home",
	});
};

//export the actionName page logic here
