import { Schema, model } from "mongoose";
import { randomUUID } from "crypto";

const UserSchema = new Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      default: () => randomUUID(),
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: {
      type: Number,
      default: 1000,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    chats: [],
    business_details: {},
  },
  { timestamps: true }
);

export default model("users", UserSchema);
