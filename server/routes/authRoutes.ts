import { Router } from "express";
import { getMe, googleCallback, signinUser, signUpUser } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import passport from "passport";

const authRouter = Router()

authRouter.post("/signup", signUpUser)
authRouter.post("/signin", signinUser)
authRouter.get("/me", protect, getMe)
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"], session: false }))
authRouter.get("/google/callback", passport.authenticate("google", { session: false, failureRedirect: `${process.env.CLIENT_URL}/login` }),googleCallback)

export default authRouter;