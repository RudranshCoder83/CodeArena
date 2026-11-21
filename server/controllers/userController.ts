import { Request, Response } from "express";
import { User } from "../models/User.js";

// GET /api/user/leaderboard?limit=5  (public)
export const getLeaderboard = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string, 10) || 5, 50);

    const users = await User.find()
      .sort({ rating: -1 })
      .limit(limit)
      .select("username rating wins losses avatarUrl");

    res.json(users);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// GET /api/user/search?q=abc  (protected)
export const searchUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const q = (req.query.q as string)?.trim();

    if (!q || q.length < 2) {
      res.json([]);
      return;
    }

    const safeQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const users = await User.find({
      username: { $regex: safeQuery, $options: "i" },
      _id: { $ne: req.user?._id },
    })
      .select("username rating avatarUrl")
      .limit(5);

    res.json(users);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};