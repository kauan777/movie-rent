import { Router } from "express";

import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { GetAllMoviesController } from "../modules/movies/useCases/getAllMovies/GetAllMoviesController";

const createMovieController = new CreateMovieController();
const getAllMoviesController = new GetAllMoviesController();

const movieRoutes = Router();

movieRoutes.get("/", getAllMoviesController.handle);
movieRoutes.post("/", createMovieController.handle);

export { movieRoutes };
