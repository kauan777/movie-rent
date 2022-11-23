import { Router } from "express";

import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";

const createMovieController = new CreateMovieController();

const movieRouter = Router();

movieRouter.post("/", createMovieController.handle);

export { movieRouter };
