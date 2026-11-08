import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import bcrypt from "bcrypt"

const generateToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET as string, {
        expiresIn: "30d"
    })
}
 
// Register a New User
// POST /api/auth/register
const signUpUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const {username, password, email} = req.body

        if(!username || !password || !email){
            res.status(400).json({ message: "Please fill all the required fields" });
            return;
        }
        // Check if user already exists
        const registerUserExists = await User.findOne({email});
        if(registerUserExists){
            res.status(400).json({
                message: "User Already Exists"
            })
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            username,
            password: hashPassword,
            email
        })
        if(user){
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id.toString())

            })
        }
        else {
            res.status(400).json({
                message: "Invalid User Data",
            })
        }
    }catch(error: any){
        console.log(error);
        res.status(400).json({
            message: error.message
        })
    }
}
