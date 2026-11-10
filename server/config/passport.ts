import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/User.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        // 1. googleId se dhundo
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        // 5. Email check
        const email = profile.emails?.[0]?.value?.toLowerCase().trim();
        if (!email) {
          return done(new Error("Google account se email nahi mila"));
        }

        // 2. Email se dhundo (pehle local signup kiya ho to link kar do)
        user = await User.findOne({ email });
        if (user) {
          user.googleId = profile.id;
          if (!user.avatarUrl) {
            user.avatarUrl = profile.photos?.[0]?.value || "";
          }
          await user.save();
          return done(null, user);
        }

        // 4. Unique username banao
        const baseName = (profile.displayName || "user")
          .replace(/\s+/g, "")
          .toLowerCase();
        let username = baseName;
        while (await User.findOne({ username })) {
          username = `${baseName}${Math.floor(1000 + Math.random() * 9000)}`;
        }

        // 3. Naya user banao
        user = await User.create({
          googleId: profile.id,
          username,
          email,
          avatarUrl: profile.photos?.[0]?.value || "",
          authProvider: "google",
        });

        return done(null, user);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

export default passport;