import { PrismaClient } from "@prisma/client";
import login_model from "../models/login_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class login_service {
  async login(data) {
    const tokens = new login_model(data.userId, data.token, data.expired_at, new Date(), new Date(), data.username, data.password);
    const user = await prisma.users.findUnique({ where: { username: data.username } });
    if (!user) {
      throw Error("User Not found");
    }
    const validUser = await bcrypt.compare(data.password, user.password);
    if (!validUser) {
      throw Error("Wrong password");
    }
    const expiresIn = "8h";
    const secretKey = "unitedfansclub";
    const expiredAt = new Date(Date.now() + 60 * 480 * 1000);

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn });
    console.log(token);
    const newToken = await prisma.tokens.create({
      data: {
        userId: user.id,
        token: token,
        expired_at: expiredAt,
        created_at: tokens.created_at,
        updated_at: tokens.updated_at,
      },
    });
    return newToken;
  }
}

export default login_service;
