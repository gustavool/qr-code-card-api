import IUser from "../models/IUser";
import { IResponseUser } from "../services/UserService";
interface IUserRepository {
  findById(id: string): Promise<IResponseUser | null>;

  findByName(name: string): Promise<IResponseUser | null>;

  findAll(): Promise<IResponseUser[]>;

  save(user: Omit<IUser, "_id">): Promise<IResponseUser | null>;

  delete(id: string): Promise<IResponseUser | null>;
}

export default IUserRepository;
