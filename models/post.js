//how to established a relationship in dataBase
// user and post  

const mongoose = require("mongoose");

//creating the schema
const postSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Type.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model('Post',postSchema);
module.exports = Post;