import { Request, Response } from "express";
import { Match } from "../models/Match.js";

// GET /api/match/history?page=1&limit=10  (protected)
export const getMatchHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }

    const me = req.user._id.toString();

    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const limit = Math.min(parseInt(req.query.limit as string, 10) || 10, 50);

    const matches = await Match.find({
      $or: [{ player1: req.user._id }, { player2: req.user._id }],
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("player1 player2 winner", "username avatarUrl")
      .lean();

    const history = matches.map((m: any) => {
      const iAmPlayer1 = m.player1?._id?.toString() === me;

      const opponent = iAmPlayer1 ? m.player2 : m.player1;
      const ratingChange = iAmPlayer1 ? m.ratingChange1 : m.ratingChange2;

      let result: "WIN" | "LOSS" | "DRAW";
      if (!m.winner) {
        result = "DRAW";
      } else if (m.winner._id.toString() === me) {
        result = "WIN";
      } else {
        result = "LOSS";
      }

      return {
        _id: m._id,
        opponent: {
          username: opponent?.username ?? "Deleted user",
          avatarUrl: opponent?.avatarUrl ?? "",
        },
        result,
        ratingChange: ratingChange ?? 0,
        status: m.status,
        date: m.createdAt,
      };
    });

    res.status(200).json(history);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};