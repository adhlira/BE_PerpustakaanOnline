import reservation_model from "../models/reservation_model.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class reservation_service {
  async getAllReservation() {
    return await prisma.bookReservation.findMany();
  }

  async getReservationById(id) {
    return await prisma.bookReservation.findUnique({ where: { id: +id } });
  }

  async createReservation(data) {
    const dataReservation = new reservation_model(data.member_id, data.book_id, data.reservation_date, data.status, data.notification_sent, new Date(), new Date());

    const newReservation = await prisma.bookReservation.create({
      data: {
        member_id: dataReservation.member_id,
        book_id: dataReservation.book_id,
        reservation_date: dataReservation.reservation_date,
        status: dataReservation.status,
        notification_sent: dataReservation.notification_sent,
        created_at: dataReservation.created_at,
        updated_at: dataReservation.updated_at,
      },
    });
    return newReservation;
  }

  async editReservation(id, data) {
    return await prisma.bookReservation.update({
      where: { id: +id },
      data: {
        ...data,
      },
    });
  }

  async deleteReservation(id) {
    return await prisma.bookReservation.delete({ where: { id: +id } });
  }
}

export default reservation_service;
