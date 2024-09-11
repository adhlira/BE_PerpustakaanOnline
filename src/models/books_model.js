class books_model {
  constructor(title, author, isbn, publisher, publication_year, category, status, created_at, updated_at) {
    (this.title = title),
      (this.author = author),
      (this.isbn = isbn),
      (this.publisher = publisher),
      (this.publication_year = publication_year),
      (this.category = category),
      (this.status = status),
      (this.created_at = created_at),
      (this.updated_at = updated_at);
  }
}

export default books_model;
