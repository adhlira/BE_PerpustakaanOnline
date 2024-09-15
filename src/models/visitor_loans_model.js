class visitor_loans_model {
     constructor(visitor_id, staff_id, borrow_date, due_date, status, created_at, updated_at, borrowing_id, book_id, return_date, late_charge, detail_borrowing_by_visitors) {
       (this.visitor_id = visitor_id),
         (this.staff_id = staff_id),
         (this.borrow_date = borrow_date),
         (this.due_date = due_date),
         (this.status = status),
         (this.created_at = created_at),
         (this.updated_at = updated_at),
         (this.borrowing_id = borrowing_id),
         (this.book_id = book_id),
         (this.return_date = return_date),
         (this.late_charge = late_charge),
         (this.status = status),
         (this.detail_borrowing_by_visitors = detail_borrowing_by_visitors);
     }
   }
   
   export default visitor_loans_model;
   