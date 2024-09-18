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
    const dataReservation = new reservation_model(data.member_id, data.book_id, data.reservation_date, data.status, data.notification_sent, new Date(), new Date(), data.detail_book_reservation);

    const newReservation = await prisma.bookReservation.create({
      data: {
        member_id: dataReservation.member_id,
        reservation_date: dataReservation.reservation_date,
        status: dataReservation.status,
        notification_sent: dataReservation.notification_sent,
        created_at: dataReservation.created_at,
        updated_at: dataReservation.updated_at,
        DetailBookReservation: {
          create: Array.isArray(dataReservation.detail_book_reservation)
            ? dataReservation.detail_book_reservation.map((detail) => ({
                book_id: detail.book_id,
                status: dataReservation.status,
                notification_sent: dataReservation.notification_sent,
              }))
            : [],
        },
      },
    });
    return newReservation;
  }

  async editReservation(id, data) {
    const dataReservation = new reservation_model(data.member_id, data.book_id, data.reservation_date, data.status, data.notification_sent, new Date(), new Date(), data.detail_book_reservation);

    const updateReservation = prisma.bookReservation.update({
      where: { id: +id },
      data: {
        member_id: dataReservation.member_id,
        reservation_date: dataReservation.reservation_date,
        status: dataReservation.status,
        DetailBookReservation: {
          update: dataReservation.detail_book_reservation.map((detail) => ({
            where: {
              reservation_id_book_id: { reservation_id: +id, book_id: detail.book_id },
            },
            data: {
              status: detail.status,
              notification_sent: detail.notification_sent,
            },
          })),
        },
      },
    });
    return updateReservation;
  }

  async deleteReservation(id) {
    return await prisma.bookReservation.delete({ where: { id: +id } });
  }
}

export default reservation_service;
