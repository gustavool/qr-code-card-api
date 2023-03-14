import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.get("/user/id/:id", new UserController().findById);
router.get("/user/name/:name", new UserController().findByName);
router.get("/users", new UserController().findAll);
router.post("/user/save", new UserController().save);

export default router;
