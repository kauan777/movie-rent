import { json, Request, Response } from "express";
import { AppError } from "../../../../erros/AppError";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { movieId, userId } = req.body;

    if (!movieId || !userId) {
      throw new AppError("Some fields are empty");
    }

    const createUserUseCase = new CreateMovieRentUseCase();

    await createUserUseCase.execute({movieId, userId});

    res.status(201).send();
    //Sem o .send o status não é enviado
  }
}
