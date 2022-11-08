const mongoose = require("mongoose")
//const schema = mongoose.schema
const postSchema =  mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title: {type:String, required:true},
    message: {type:String, required:true},
    date:{type: String, required:true}   
})

 const Post = mongoose.model("post", postSchema)

 module.exports = Post