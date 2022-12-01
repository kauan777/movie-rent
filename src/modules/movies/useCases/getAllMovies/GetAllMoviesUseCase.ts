import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllMoviesUseCase {
  async execute(): Promise<Movie[]> {
    //Verify if user exis

    //Create User
    const movies = await prisma.movie.findMany();

    return movies;
  }
}
