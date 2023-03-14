import mongoose from "mongoose";
import IUser from "./IUser";

const UserSchema = new mongoose.Schema<IUser>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", UserSchema);
