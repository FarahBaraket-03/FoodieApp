const jwt=require("jsonwebtoken");
const express=require("express");
const bcrypt=require("bcrypt")
const UserModel=require("../models/Users1")
const routerUser=express.Router();

routerUser.post('/register',async (req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.findOne({username:username})
    if(user){
        return res.json({message:"User already exist",
            status:false
        })
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new UserModel({username,password:hashedPassword});
    newUser.save();
    res.json({message:"registered successfully",
        status:true
    })
})


routerUser.post("/login",async (req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.findOne({username:username});
    if(!user){
        return res.json({message:"user doesn't exist",status:false})
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.json({message:"User or password is incorrect",status:false})
    }
    const token=jwt.sign({id:user._id},"secret");
    res.json({token,UserId:user._id,status:true})
})



module.exports=routerUser