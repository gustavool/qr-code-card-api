import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/UserService";

class UserController {
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const service = container.resolve(UserService);
    const user = await service.findById(id);

    return res.json(user);
  }

  async findByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;
    const service = container.resolve(UserService);
    const user = await service.findByName(name);

    return res.json(user);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(UserService);
    const users = await service.findAll();
    return res.json(users);
  }

  async save(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(UserService);
    const { name, about, linkedin, github } = req.body;
    const user = await service.save({ name, about, linkedin, github });

    return res.status(201).json(user);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const service = container.resolve(UserService);
    const userRemoved = await service.delete(id);

    return res.status(204).json(userRemoved);
  }
}

export default UserController;
