import visitors_model from "../models/visitors_model.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class visitors_service {
  async getAllVisitors() {
    return await prisma.visitors.findMany();
  }

  async getVisitorById(id) {
    return await prisma.visitors.findUnique({ where: { id: +id } });
  }

  async createVisitor(data) {
    const visitor = new visitors_model(data.name, data.email, data.phone_number, new Date(), new Date(), new Date());

    const newVisitor = await prisma.visitors.create({
      data: {
        name: visitor.name,
        email: visitor.email,
        phone_number: visitor.phone_number,
        visit_date: visitor.visit_date,
        created_at: visitor.created_at,
        updated_at: visitor.updated_at,
      },
    });
    return newVisitor;
  }

  async editVisitor(id, data) {
    return await prisma.visitors.update({
      where: {
        id: +id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteVisitor(id) {
    return await prisma.visitors.delete({ where: { id: +id } });
  }
}

export default visitors_service;
