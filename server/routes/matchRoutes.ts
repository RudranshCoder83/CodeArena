import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { getMatchHistory } from "../controllers/matchController.js";

const matchRouter = Router();

matchRouter.get("/history", protect, getMatchHistory);

export default matchRouter; 