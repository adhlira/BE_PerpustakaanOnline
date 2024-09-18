import lost_or_damaged_books_model from "../models/lost_or_damaged_books_model.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class lost_or_damaged_books_service {
  async getAllData() {
    return await prisma.lostOrDamgedBooks.findMany();
  }

  async getDataById(id) {
    return await prisma.lostOrDamgedBooks.findUnique({ where: { id: +id } });
  }

  async createNewData(data) {
    const dataService = new lost_or_damaged_books_model(data.book_id, data.status, new Date(), data.description, new Date(), new Date());

    const newData = await prisma.lostOrDamgedBooks.create({
      data: {
        book_id: dataService.book_id,
        status: dataService.status,
        reported_date: dataService.reported_date,
        descriptiion: dataService.description,
        created_at: dataService.created_at,
        updated_at: dataService.updated_at,
      },
    });
    return newData;
  }

  async editData(id, data) {
    return await prisma.lostOrDamgedBooks.update({
      where: { id: +id },
      data: {
        ...data,
      },
    });
  }

  async deleteData(id) {
    return await prisma.lostOrDamgedBooks.delete({ where: { id: +id } });
  }
}

export default lost_or_damaged_books_service;
