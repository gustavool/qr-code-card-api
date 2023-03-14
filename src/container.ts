import { container } from "tsyringe";
import UserRepository from "./repositories/UserRepository";
import UserService from "./services/UserService";

container.registerSingleton<UserRepository>("UserRepository", UserRepository);

container.registerSingleton<UserService>("UserService", UserService);
