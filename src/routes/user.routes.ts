import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.get("/", getAllUsersController.handle);
userRoutes.post("/", createUserController.handle);

export { userRoutes };
