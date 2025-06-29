import { createUserModel } from "../models/usersModel.js";

export const registerUser=async(req,res)=>{
    
    try {
        const {email,password,rol,lenguage}=req.body
    const user =await createUserModel(email,password,rol,lenguage);
    res.status(201).json({message: "Usuario creado correctamente",user})
    } catch (error) {
        console.log(error);
        
    }
}