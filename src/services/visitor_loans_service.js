import visitor_loans_model from "../models/visitor_loans_model.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class visitor_loans_service {
  async getAllBorrowing() {
    return await prisma.borrowingByVisitors.findMany();
  }

  async getBorrowingById(id) {
    return await prisma.borrowingByVisitors.findUnique({ where: { id: +id } });
  }

  async createBorrowing(data) {
    const borrowing = new visitor_loans_model(data.visitor_id, data.staff_id, new Date(), data.due_date, data.status, new Date(), new Date(), data.borrowing_id, data.book_id, null, data.late_charge, data.detail_borrowing_by_visitors);

    const newBorrowing = await prisma.borrowingByVisitors.create({
      data: {
        visitor_id: borrowing.visitor_id,
        staff_id: borrowing.staff_id,
        borrow_date: borrowing.borrow_date,
        due_date: new Date(borrowing.due_date),
        status: borrowing.status,
        created_at: borrowing.created_at,
        updated_at: borrowing.updated_at,
        DetailBorrowingByVisitors: {
          create: Array.isArray(borrowing.detail_borrowing_by_visitors)
            ? borrowing.detail_borrowing_by_visitors.map((detail) => ({
                book_id: detail.book_id,
                return_date: borrowing.return_date,
                late_charge: borrowing.late_charge,
                status: borrowing.status,
              }))
            : [],
        },
      },
    });
    return newBorrowing;
  }

  async editBorrowing(id, data) {
     const borrowing = new visitor_loans_model(data.visitor_id, data.staff_id, new Date(), data.due_date, data.status, new Date(), new Date(), data.borrowing_id, data.book_id, data.return_date, data.late_charge, data.detail_borrowing_by_visitors);
     const upadateBorrowing = await prisma.borrowingByVisitors.update({
       where: {
         id: +id,
       },
       data: {
         visitor_id: borrowing.visitor_id,
         staff_id: borrowing.staff_id,
         borrow_date: borrowing.borrow_date,
         due_date: new Date(borrowing.due_date),
         status: borrowing.status,
         DetailBorrowingByVisitors: {
           update: borrowing.detail_borrowing_by_visitors.map((detail) => ({
             where: {
               book_id_borrowing_id: { book_id: +detail.book_id, borrowing_id: +id },
             },
             data: {
               return_date: new Date(detail.return_date),
               late_charge: detail.late_charge,
               status: detail.status,
             },
           })),
         },
       },
     });
     return upadateBorrowing;
  }

  async deleteBorrowing(id) {
    await prisma.detailBorrowingByVisitors.deleteMany({ where: { borrowing_id: +id } });
    return await prisma.borrowingByVisitors.delete({ where: { id: +id } });
  }
}

export default visitor_loans_service;
