const express = require("express");

const userRouter=express.Router();

const userModel=require("../models/userModel.js");

userRouter.post("/signup",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(name==""|| email=="" || password==""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user = await new userModel({name,email,password});
        await user.save();
;        return res.status(201).send({message:"User created successfully",user});
    }catch(error){
            return res.status(400).send({message:"User already exists"});
            return res.status(500).send({message:error.message});
        }
            }) 
            userRouter.post("/login",async(req,res)=>{
                try{
                    const {email,password}=req.body;
                    if(!email || password){}
                        return res.status(400).send({message:"All fields are required"});
                    }
                    const check=await userModel.findone({email,password});
                    if(!check){
                        return res.status(400).send({message:"please signup first"});
                    }
                    return res.status(200).send({message:"Login successfully",user:check});
                } catch(error){
                    return res.status(500).send({message:"something went wrong"});
                }
                }
            }) 
                  const newUser = await userModel.create({name,email,password});
        return res.status(201).send({message:"User created successfully",user:newUser});
    }
})