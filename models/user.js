// const mongoose = require("mongoose");
const mongoose = require('mongoose');
//schema of the user
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true, //without having an email value user won't able to create the account
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	{
        //this is handle when update data and delete data 
		timestamp: true,
	} 
);

//we tell mongoose to that this is the model which we created 
const User = mongoose.model('User',userSchema); 

module.exports = User;