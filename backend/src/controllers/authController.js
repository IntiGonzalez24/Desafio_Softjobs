import { findUserByEmail } from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const loginUser = async(req,res)=>{

    try {
        const {email,password} = req.body
        const user = await findUserByEmail(email)
        if(!user){
            return res.status(401).json({message :'No autorizado'})
        }
        const isPasswordValid = bcrypt.compareSync(password,user.password)
         if(!isPasswordValid){
            return res.status(401).json({message: 'no autorizado'})
         }

         const token = jwt.sign({email}, process.env.JWTSECRET,{
            expiresIn:'30s'
         })
         return res.status(200).json({token})
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

export const userByEmail = async(req,res)=>{
  try {
    const {email} = req.query
    const users= await findUserByEmail(email)
    res.status(200).json({users})
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
    
  }
}