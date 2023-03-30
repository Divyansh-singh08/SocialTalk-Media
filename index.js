const express = require("express");
const cookieParser = require("cookie-parser"); //this is plug in for storing cookies
const app = express();//for server start
//define port
const port = 8000;
//express-ejs-layouts is a middleware for the Express web application framework 
//that allows you to use layouts in your views using the EJS template engine.
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

//used for session cookies...................
// express-session is a popular middleware module for the Express web framework in Node.js.
// It provides session management capabilities to web applications by 
// maintaining session state on the server-side and associating a unique session ID with each client.

const session = require("express-session");
const passport = require("passport");//call passportJs
const passportLocal = require("./config/passport_local_strategy");

//this is for the setting for the page that after refresh then also we still in signIn out page
//using session cookies
const MongoStore = require("connect-mongo");

//SCSS/SASS FILE required
const sassMiddleware = require("node-sass-middleware");

//need to put into some setting
app.use(
	sassMiddleware({
		src: "./assets/scss",
		dest: "./assets/css",
		debug: true,
		outputStyle: "extended",
		prefix: "/css",
	})
);
//middleWare
app.use(express.urlencoded());
//need to set cookieParser
app.use(cookieParser());

// app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// //use express router coming from router
// //fetching from router
// // "/" mean home page
// app.use("/", require("./routes/"));

//setup the view engines
//needs to install ejs for look
app.set("view engine", "ejs");
app.set("views", "./views");

const store = MongoStore.create(
	{
		mongoUrl: "mongodb://127.0.0.1:27017/tester",
		autoRemove: "disabled",
	},

	async (err) => {
		await console.log(err || "connection is connected in mongoes ok");
	}
);

//middleware for the  passportJs Encrypted file converted
app.use(
	session({
		name: "CodeTalk",
		//alter todo change
		secret: "anything",
		saveUninitialized: false,
		resave: false,
		cookies: {
			maxAge: 1000 * 60 * 100,
		},
		store: store,
	})
);

//middleware for passportJs initialization/session
app.use(passport.initialize());
app.use(passport.session());

//call the function as middleware
//and user where set in the locals
//user should access able in views
app.use(passport.setAuthenticatedUser);

//use express router coming from router
//fetching from router
// "/" mean home page
app.use("/", require("./routes/"));

//start you server from here
app.listen(port, (err) => {
	if (err) {
		console.log("TRY again...", err);
		//interpolation learn
		console.log(`Error is running the server: ${err}`);
	}

	console.log(`${port} Server looking Cool...🦄 🐢 🙆...`);
});
