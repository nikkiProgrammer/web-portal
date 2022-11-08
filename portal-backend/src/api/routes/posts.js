const express = require("express")
const route = express.Router()
const Post = require("../models/Post")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")

//create post
route.post("/incident",auth, async(req,res)=>{
    const post = req.body
    try {
        const createpost = new Post({
            date:post.date,
            title: post.title,
            message: post.message,
            user:req.userId
        })
        await createpost.save()    
        res.json(createpost)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

//Get the logged in User orders to profile
route.get("/incidents", auth, async(req,res)=>{
    try {
        const posts = await Post.find({user: req.userId})
        res.json(posts)    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
       
    
})

module.exports = route; // export to use in server.js