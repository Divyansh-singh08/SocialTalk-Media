//need postSchema to create post
//fetch the postSchema
const Post = require("../models/post");

//importing the comment for deleting
const Comment = require("../models/comment");

// module.exports.createPost =function(req,res){
//     Post.create({
//         content:req.body.content,
//         user:req.user._id,
//     }, function (err ,post){
//         if(err){
//             console.log(` err in creating post `);
//             return;
//         }
//          return res.redirect('back');

//     });
// }

//we are just making views update by just putting the data information fetch by schemaPost
module.exports.createPost = async function (req, res) {
	try {
		const post = await Post.create({
			content: req.body.content,
			user: req.user._id,
		});
		return res.redirect("back");
	} catch (err) {
		console.error("Error in creating post", err);
		return res.status(500).send("Error in creating post");
	}
};

//now need to delete the post and comment to which is associated with the post
module.exports.destroyPost = async(req,res)=>{
  try{

    //before deleting we need to check is it present in dB or not
    const postD = await Post.findById(req.params.id);
    //i need to check is the post created by the user is he is only deleting then allow only
    //ideally we do like this _id but mongoose give to do like id
    //.id means converting the object id into string
    if(postD.user == req.user.id){
      //if i am getting the post
      //  await postD.remove();
      await postD.deleteOne();

      //delete the comment also
      const commentD = await Comment.deleteMany({postD:req.params.id});
      if(commentD){
        //if deleted
        return res.redirect('back');
      }

    }else{
      //if not match
      return res.redirect('back');

    }
  }catch(err){
    console.log(err);
    return res.redirect('back');

  }
}

// module.exports.destroyPost = async (req, res) => {
// 	try {
// 		// Find the post in the database
// 		const postD = await Post.findById(req.params.id);

// 		// Check if the logged-in user is the author of the post
// 		if (postD.user.toString() !== req.user.id) {
// 			return res.status(401).json({ msg: "User not authorized" });
// 		}

// 		// Delete the post
// 		await postD.deleteOne();

// 		// Delete all comments associated with the post
// 		await Comment.deleteMany({ post: req.params.id });

// 		// Redirect the user back to the previous page
// 		res.redirect("back");
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ msg: "Server Error" });
// 	}
// };
