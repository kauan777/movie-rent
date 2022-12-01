import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    //Verify if user exis

    //Create User
    const users = await prisma.user.findMany();

    return users;
  }
}
