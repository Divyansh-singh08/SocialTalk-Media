
//need postSchema to create post
//fetch the postSchema 
const Post = require('../models/post'); 

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
module.exports.createPost = async function(req, res) {
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