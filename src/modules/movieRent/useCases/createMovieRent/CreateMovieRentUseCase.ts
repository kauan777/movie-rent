import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
    async execute({movieId, userId}: CreateMovieRentDTO): Promise<void>{
        
        // verify if movie exists
        const movieExists =  await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if(!movieExists){
            throw new AppError("Movie does not exists!");
        }

        // verify if movie is already rented by other person
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId
            }
        })
        if(movieAlreadyRented){
            throw new AppError("Movie already rented!");
        }


        // verify if user exists
        const userExists =  await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if(!userExists){
            throw new AppError("User does not exists!");
        }

        // create a location

        await prisma.movieRent.create({
            data:{
                movieId,
                userId
            }
        })


    }
}