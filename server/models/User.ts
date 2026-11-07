import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  googleId?: string;
  fullName: string;
  email: string;
  passwordHash?: string;
  rating: number;

  streakDetails: {
    currentStreak: number;
    longestStreak: number;
    hasSolvedToday: boolean;
  };

  avatarUrl: string;

  friends: mongoose.Types.ObjectId[];

  friendRequests: {
    from: mongoose.Types.ObjectId;
    createdAt: Date;
  }[];

  lastSeenAt: Date;

  refreshToken?: {
    token?: string;
    createdAt: Date;
    expiresAt?: Date;
  };

  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    passwordHash: {
      type: String,
      select: false,
    },

    rating: {
      type: Number,
      default: 800,
      min: 0,
    },

    streakDetails: {
      currentStreak: {
        type: Number,
        default: 0,
      },
      longestStreak: {
        type: Number,
        default: 0,
      },
      hasSolvedToday: {
        type: Boolean,
        default: false,
      },
    },

    avatarUrl: {
      type: String,
      default: "",
    },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    friendRequests: [
      {
        from: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    lastSeenAt: {
      type: Date,
      default: Date.now,
    },

    refreshToken: {
      token: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      expiresAt: {
        type: Date,
      },
    },
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.passwordHash;
    delete ret.refreshToken;
    return ret;
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;