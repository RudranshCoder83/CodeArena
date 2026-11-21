import { Router } from "express";
import { getLeaderboard, searchUser } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter = Router();

userRouter.get("/leaderboard", getLeaderboard)
userRouter.get("/search", protect, searchUser);

export default userRouter;