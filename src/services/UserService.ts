import { isValidObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";
import IUser from "../models/IUser";
import IUserRepository from "../repositories/IUserRepository";
import { AppError } from "../utils/AppError";

export interface IResponseUser {
  id: string;
  name: string;
  about: string;
  linkedin: string;
  github: string;
  createdAt: string;
}
@injectable()
class UserService {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async findById(id: string): Promise<IResponseUser | null> {
    if (!isValidObjectId(id)) {
      throw new AppError("Id is invalid", 400);
    }

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return user;
  }

  async findByName(name: string): Promise<IResponseUser> {
    const user = await this.userRepository.findByName(name);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return user;
  }

  async findAll(): Promise<IResponseUser[]> {
    const users = await this.userRepository.findAll();

    return users;
  }

  async save(
    user: Omit<IUser, "_id" | "createdAt">
  ): Promise<IResponseUser | null> {
    const createdAt = new Date().toISOString();
    const userCreated = await this.userRepository.save({
      ...user,
      createdAt: createdAt,
    });

    if (!userCreated) {
      throw new AppError("Error to create a new user", 404);
    }

    return userCreated;
  }
}

export default UserService;
