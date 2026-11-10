import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  password?: string;
  googleId: string;
  avatarUrl: string
  authProvider: "local" | "google";
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: false, select: false },
    googleId: { type: String, unique: true, sparse: true },
    avatarUrl: { type: String, default: "" },
    authProvider: { type: String, enum: ["local", "google"], default: "local" },
  },
  { timestamps: true }
);

UserSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

export const User = model<IUser>("User", UserSchema);