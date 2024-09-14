class member_loans_model {
  constructor(member_id, staff_id, borrow_date, due_date, status, created_at, updated_at, loan_id, book_id, return_date, late_charge, detail_borrowing_by_members) {
    (this.member_id = member_id),
      (this.staff_id = staff_id),
      (this.borrow_date = borrow_date),
      (this.due_date = due_date),
      (this.status = status),
      (this.created_at = created_at),
      (this.updated_at = updated_at),
      (this.loan_id = loan_id),
      (this.book_id = book_id),
      (this.return_date = return_date),
      (this.late_charge = late_charge),
      (this.status = status),
      (this.detail_borrowing_by_members = detail_borrowing_by_members);
  }
}

export default member_loans_model;
