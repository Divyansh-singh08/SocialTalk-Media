
//we need two models to access here
const Comment = require('../models/comment');

const Post = require('../models/post');

// module.exports.createComment = async(req,res)=>{
//     //in html web page id is showing 
//     //so we don't want to any one change the id and make our code error
//     //so we validate or check 
//     //...we find the id with the postId first
//     //then create the comment after
//     //why req.body.post bcz name of this form is post in home.ejs 
//     try{
//         const cPost = await Post.findById(req.body.post);
//         if(cPost){
//             //if post is found we create the comment
//             Comment.create({
//                 content: req.body.content,
//                 post:req.body.post,
//                 user:req.user._id,
//             },async(err,comment)=>{
//                 try{
//                     //update the comment
//                     //this is given by mongodB
//                     cPost.comments.push(comment); 
//                     //when ever i update i need to save to
//                     cPost.save();

//                     res.redirect('/');

//                 }catch(err){
//                     console.log(err);
//                 }
//             })
            

//         }
//     }catch(err){
//         console.log(err);
//     }


// }


module.exports.createComment = async (req, res) => {
    try {
        //postSchema id store here
      const cPost = await Post.findById(req.body.post);
      if (cPost) {
        //if post present the create comment related to it
        const comment = await Comment.create({
          content: req.body.content,
          post: req.body.post,
          user: req.user._id,
        });
        //storing the comment in the dB 
        cPost.comments.push(comment);
        await cPost.save();
        res.redirect('/');
      }
    } catch (err) {
      console.log(err);
    }
  }
  