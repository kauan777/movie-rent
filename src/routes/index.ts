import { Router } from "express";
import { movieRouter } from "./movie.routes";

import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/movies", movieRouter);
routes.use("/users", userRoutes);

export { routes };
