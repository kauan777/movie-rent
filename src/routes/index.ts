import { Router } from "express";
import { movieRoutes } from "./movie.routes";
import { rentRoutes } from "./rent.routes";

import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/movies", movieRoutes);
routes.use("/users", userRoutes);
routes.use("/rent", rentRoutes);

export { routes };
