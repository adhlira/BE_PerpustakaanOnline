import { PrismaClient } from "@prisma/client";
import userModel from "../models/users_model.js";
const prisma = new PrismaClient();

class users_service {
  async getAllUsers() {
    return await prisma.users.findMany();
  }

  async createUser(data) {
    const user = new userModel(data.role_id, data.username, data.password, data.name, data.email, data.phone_number, new Date(), new Date());

    await user.hashPassword();

    const newUser = await prisma.users.create({
      data: {
        role_id: user.role_id,
        username: user.username,
        password: user.password,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
    return newUser;
  }
}

export default users_service;
