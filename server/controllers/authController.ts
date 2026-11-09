import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";


const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
    });
};

// POST /api/auth/register
export const signUpUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const email = req.body.email?.toLowerCase().trim();

        if (!username || !password || !email) {
            res.status(400).json({ message: "Please fill all the required fields" });
            return;
        }

        if (password.length < 8) {
            res.status(400).json({ message: "Password must be at least 8 characters" });
            return;
        }

        // Email ya username pehle se hai?
        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            res.status(409).json({ message: "User already exists" });
            return;
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            password: hashPassword,
            email,
        });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id.toString()),
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// POST /api/auth/login
export const signinUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { password } = req.body;
        const email = req.body.email?.toLowerCase().trim();

        if (!email || !password) {
            res.status(400).json({ message: "Please fill all the required fields" });
            return;
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user || !user.password) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }

        res.json({
            _id: user._id,
            email: user.email,
            username: user.username,
            token: generateToken(user._id.toString()),
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// GET /api/auth/me  (protect ke saath use hoga)
export const getMe = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Not Authorized" });
            return;
        }
        res.json(req.user);
    } catch (error: any) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}