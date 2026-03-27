import mongoose from "mongoose";

const moodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moodType: {
      type: String,
      enum: ["excellent", "good", "neutral", "bad", "terrible"],
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Mood = mongoose.model("Mood", moodSchema);

export default Mood;
