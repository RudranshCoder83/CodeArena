import {Document, model, Schema} from "mongoose";

export interface IUser extends Document{
  username: string,
  password?: string,
  email: string,
  createdAt: Date,
  updatedAt: Date,
}

const UserSchema = new Schema<IUser>({
  username: {type: String, required: true, trim: true},
  email: {type: String, required: true},
  password: {type: String, required: false, minlength: 6},
}, {timestamps: true} )

UserSchema.set("toJSON", {
  transform: (doc,ret) =>{
    delete ret.password;
    return ret;
  }
})

export const User = model<IUser>("User", UserSchema);