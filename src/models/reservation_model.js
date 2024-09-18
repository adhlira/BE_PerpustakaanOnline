class reservation_model {
  constructor(member_id, book_id, reservation_date, status, notification_sent, created_at, updated_at, detail_book_reservation) {
    (this.member_id = member_id),
      (this.book_id = book_id),
      (this.reservation_date = reservation_date),
      (this.status = status),
      (this.notification_sent = notification_sent),
      (this.created_at = created_at),
      (this.updated_at = updated_at),
      (this.detail_book_reservation = detail_book_reservation);
  }
}

export default reservation_model;
