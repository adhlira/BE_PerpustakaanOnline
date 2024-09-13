class member_loans_model {
  constructor(user_id, book_id, borrow_date, due_date, return_date, late_charge, status, created_at, updated_at) {
    (this.user_id = user_id),
      (this.book_id = book_id),
      (this.borrow_date = borrow_date),
      (this.due_date = due_date),
      (this.return_date = return_date),
      (this.late_charge = late_charge),
      (this.status = status),
      (this.created_at = created_at),
      (this.updated_at = updated_at);
  }
}

export default member_loans_model;
