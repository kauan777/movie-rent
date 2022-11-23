import { Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new AppError("Some fields are empty");
    }

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ email, name });

    return res.status(201).json(result);
  }
}
