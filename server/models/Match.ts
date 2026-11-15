import { Document, model, Schema, Types } from "mongoose";

export interface IMatch extends Document{
    player1: Types.ObjectId;
    player2: Types.ObjectId;
    winner: Types.ObjectId | null;
    newRatingPlayer1: number;
    newRatingPlayer2: number;
    status: "completed" | "forfeit" | "draw";
}

const matchSchema = new Schema<IMatch>(
    {
        player1: {type: Schema.Types.ObjectId, ref: "User", required: true},
        player2: {type: Schema.Types.ObjectId, ref: "User", required: true},
        winner: { type: Schema.Types.ObjectId, ref: "User", default: null },
        newRatingPlayer1: {type: Number, default: 0},
        newRatingPlayer2: {type: Number, default: 0},
        status: { type: String, enum: ["completed", "forfeit", "draw"], default: "completed"}
    },
    { timestamps: true }
);

// Indexes for match history
matchSchema.index({ player1: 1, createdAt: -1 });
matchSchema.index({ player2: 1, createdAt: -1 });

export const Match = model<IMatch>("Match", matchSchema);