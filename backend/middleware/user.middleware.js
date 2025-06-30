import { findUserByEmail } from "../src/models/usersModel.js";

const createUserMiddleware = async(req,res,next)=>{
    try {
        const {email} = req.body
        if(!email){
            return res.status(400).json({message: 'El correo electronico es obligatorio'})

        }
        const user= await findUserByEmail(email)
        if(user){
            return res.status(400).json({message: 'El usuario ya existe'})
        }
        next()
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Hubo un problema al procesar la solicitud'})
        
        
    }

}

export {createUserMiddleware}