import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../erros/AppError";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: CreateMovieDTO): Promise<Movie> {
    //Verify if user exis
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("User already exists");
    }

    //Create User
    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });
    return movie;
  }
}
