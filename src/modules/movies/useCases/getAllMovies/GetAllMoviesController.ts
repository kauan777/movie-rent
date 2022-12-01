import { Request, Response } from "express";
import { GetAllMoviesUseCase } from "./GetAllMoviesUseCase";

export class GetAllMoviesController {
  async handle(req: Request, res: Response) {
    const getAllMoviesUseCase = new GetAllMoviesUseCase();

    const result = await getAllMoviesUseCase.execute();

    return res.json(result);
  }
}
