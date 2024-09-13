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
    const borrowing = new member_loans_model(data.user_id, data.book_id, new Date(), new Date(), new Date(), data.late_charge, data.status, new Date(), new Date());

    const newBorrowing = await prisma.borrowingByMembers.create({
      data: {
        user_id: borrowing.user_id,
        book_id: borrowing.book_id,
        borrow_date: borrowing.borrow_date,
        due_date: borrowing.due_date,
        return_date: borrowing.return_date,
        late_charge: borrowing.late_charge,
        status: borrowing.status,
        created_at: borrowing.created_at,
        updated_at: borrowing.updated_at,
      },
    });
    return newBorrowing;
  }

  async editBorrowing(id, data) {
    return await prisma.borrowingByMembers.update({
      where: {
        id: +id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteBorrowing(id) {
    return await prisma.borrowingByMembers.delete({ where: { id: +id } });
  }
}

export default member_loans_service;
