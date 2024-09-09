import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class users_service {
  async getAllUsers() {
    return await prisma.users.findMany();
  }

  
  //   constructor(userModel) {
  //     this.userModel = userModel;
  //   }
  //   async getAllData() {
  //     return await this.userModel.getAllUsers();
  //   }
}

export default users_service;
