import { Router } from "express";
import { CreateMovieRentController } from "../modules/movieRent/useCases/createMovieRent/CreateMovieRentController";

const createMovieRentController = new CreateMovieRentController();

const rentRoutes = Router();

rentRoutes.post("/", createMovieRentController.handle); 

export { rentRoutes };
