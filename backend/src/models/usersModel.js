import pool from "../../db/config.js";
import bcrypt from 'bcryptjs'


//Modelo del registro de usuario
export const createUserModel=async(email,password,rol,lenguage)=>{
    const hashedPassword = bcrypt.hashSync(password)
    const SQLQuery={
        text:'INSERT INTO USUARIOS(email,password,rol,lenguage) VALUES ($1,$2,$3,$4) RETURNING email,rol,lenguage',
        values:[email,hashedPassword,rol,lenguage]
    }
    const response = await pool.query(SQLQuery)
    return response.rows[0]
}

export const findUserByEmail= async(email)=>{
    const SQLQuery={
        text:'SELECT * FROM USUARIOS WHERE email = $1',
        values:[email]
    }
    const response = await pool.query(SQLQuery)
    return response.rows[0]

}