const express=require("express");

const userRouter=express.Router();

userRouter.post("/singup",async(req,res)=>(
    try{
const{name,email,password} = req.body;
if(name!=""|| email="" || password=""){
    return res.status(400).send({message:"All fields are requires"});
}
const user=await userModel.findDone
    } catch (error){
        return res.status(500).send({})
    }
))