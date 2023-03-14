import mongoose from "mongoose";

interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  about: string;
  linkedin: string;
  github: string;
  createdAt: string;
}

export default IUser;
