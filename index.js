const express = require("express");

const cookieParser = require("cookie-parser");//this is plug in

const db = require("./config/mongoose");
const app = express();
//middleWare 
app.use(express.urlencoded()); 
//need to set cookieParser
app.use(cookieParser());

//define port
const port = 8000;

//use express router coming from router
//fetching from router
// "/" mean home page
app.use("/", require("./routes/"));

//setup the view engines
//needs to install ejs for look
app.set('view engine','ejs');
app.set('views','./views');





//start you server from here
app.listen(port, (err) => {
	if (err) {
		console.log("TRY again...", err);
		//interpolation learn
		console.log(`Error is running the server: ${err}`);
	}

	console.log(`${port} Server looking Cool...🦄 🐢 🙆...`);
});
