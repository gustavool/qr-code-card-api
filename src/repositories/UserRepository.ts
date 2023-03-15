import mongoose from "mongoose";
import IUser from "../models/IUser";
import User from "../models/User";
import { IResponseUser } from "../services/UserService";
import UserMapper from "../utils/UserMapper";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
  async findById(id: string): Promise<IResponseUser | null> {
    const user = await User.findById<IUser>(id);

    if (!!user) {
      return UserMapper(user);
    }

    return null;
  }

  async findByName(name: string): Promise<IResponseUser | null> {
    const user = await User.findOne({ name: name });

    if (!!user) {
      return UserMapper(user);
    }

    return null;
  }

  async findAll(): Promise<IResponseUser[]> {
    const users = await User.find();

    if (users.length > 0) {
      const usersMapped = users.map((user) => UserMapper(user));
      return usersMapped;
    }

    return [];
  }

  async save(user: Omit<IUser, "_id">): Promise<IResponseUser | null> {
    const userCreated = await User.create({
      ...user,
      _id: new mongoose.mongo.ObjectId(),
    });

    if (!!userCreated) {
      return UserMapper(userCreated);
    }

    return null;
  }

  async delete(id: string): Promise<IResponseUser | null> {
    const userRemoved = await User.findByIdAndDelete(id);
    if (!!userRemoved) {
      return UserMapper(userRemoved);
    }

    return null;
  }
}

export default UserRepository;
