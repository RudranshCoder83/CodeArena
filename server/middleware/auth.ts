import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/User.js";



export const protect = async ( req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers.authorization;

  // Header nahi hai ya Bearer se start nahi hota
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "No token found" });
    return;
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };

    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(401).json({ message: "Not authorized, user not found" });
      return;
    }

    req.user = user;
    next();
  } catch (error: any) {
    console.error("[Auth:protect] Token error:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};