import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "MEMBER"],
      default: "MEMBER",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("user", User);
