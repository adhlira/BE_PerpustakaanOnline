import { PrismaClient } from "@prisma/client";
import userModel from "../models/users_model.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class users_service {
  async getAllUsers() {
    return await prisma.users.findMany();
  }

  async getUserById(id) {
    return await prisma.users.findUnique({ where: { id: +id } });
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

  async editUser(id, data) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return await prisma.users.update({
      where: { id: +id },
      data: {
        ...data,
      },
    });
  }

  async deleteUser(id) {
    return await prisma.users.delete({ where: { id: +id } });
  }
}

export default users_service;
