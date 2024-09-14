import member_loans_model from "../models/member_loans_model.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class member_loans_service {
  async getAllBorrowing() {
    return await prisma.borrowingByMembers.findMany();
  }

  async getBorrowingById(id) {
    return await prisma.borrowingByMembers.findUnique({ where: { id: +id } });
  }

  async createBorrowing(data) {
    const borrowing = new member_loans_model(data.member_id, data.staff_id, new Date(), data.due_date, data.status, new Date(), new Date(), data.loan_id, data.book_id, null, data.late_charge, data.detail_borrowing_by_members);

    const newBorrowing = await prisma.borrowingByMembers.create({
      data: {
        member_id: borrowing.member_id,
        staff_id: borrowing.staff_id,
        borrow_date: borrowing.borrow_date,
        due_date: new Date(borrowing.due_date),
        status: borrowing.status,
        created_at: borrowing.created_at,
        updated_at: borrowing.updated_at,
        DetailBorrowingByMembers: {
          create: Array.isArray(borrowing.detail_borrowing_by_members)
            ? borrowing.detail_borrowing_by_members.map((detail) => ({
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
    const borrowing = new member_loans_model(data.member_id, data.staff_id, new Date(), data.due_date, data.status, new Date(), new Date(), data.loan_id, data.book_id, data.return_date, data.late_charge, data.detail_borrowing_by_members);
    const upadateBorrowing = await prisma.borrowingByMembers.update({
      where: {
        id: +id,
      },
      data: {
        member_id: borrowing.member_id,
        staff_id: borrowing.staff_id,
        borrow_date: borrowing.borrow_date,
        due_date: new Date(borrowing.due_date),
        status: borrowing.status,
        DetailBorrowingByMembers: {
          update: borrowing.detail_borrowing_by_members.map((detail) => ({
            where: {
              loan_id_book_id: { loan_id: +id, book_id: +detail.book_id },
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
    return await prisma.borrowingByMembers.delete({ where: { id: +id } });
  }
}

export default member_loans_service;
