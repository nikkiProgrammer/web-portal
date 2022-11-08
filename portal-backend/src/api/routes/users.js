const express = require('express');
const route  = express.Router(); 
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/user")

route.post('/signup',async (req,res)=>{
const {email, password, name} = req.body
try{
    let signup = await User.findOne({email})
    if(signup)
    return res.status(404).json("email already register")

    const salt = await bcrypt.genSalt(8)
    const hashPassword = await bcrypt.hash(password,salt)
    
    signup = new User({
        name,
        password: hashPassword,
        email

    })

    await signup.save()
    const payload = {
        user:{
            id:signup._id,
            email: signup.email
        }
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET)
    res.json({msg:"insert successfully", status:"success", result:signup, token})
}catch (error){
    console.error(error)
}
}) 


route.post('/signin', async (req,res)=>{
    const {
        email,
        password}
        = req.body
   

    try{
const login = await User.findOne({email})
if(!login)
return res.status(404).json({msg:"email do not exist"})

const passwordCheck = await bcrypt.compare(password, login.password); 

if(!passwordCheck)
return res.status(404).json({msg:"invalid password"})
const payload = {
 user:{
    id:login._id,
    email: login.email
 }

}
const token = jwt.sign(payload, process.env.JWT_SECRET,)
res.json({msg:"insert successfully", status:"success",result:login, token})
    } catch (error){
        res.status(500).json("server error")
    }
});

module.exports = route; // export to use in server.js