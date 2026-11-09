import { Router } from "express";
import { getMe, signinUser, signUpUser } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const authRouter = Router()

authRouter.post("/signup", signUpUser)
authRouter.post("/signin", signinUser)
authRouter.get("/me", protect, getMe)

export default authRouter;