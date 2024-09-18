import bookModel from "../models/books_model.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class books_service {
  async getAllBook() {
    return await prisma.books.findMany();
  }

  async getBookById(id) {
    return await prisma.books.findUnique({ where: { id: +id } });
  }

  async createBook(data) {
    const book = new bookModel(data.title, data.author, data.isbn, data.publisher, data.publication_year, data.category, data.status, new Date(), new Date());

    const newBook = await prisma.books.create({
      data: {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        publisher: book.publisher,
        publication_years: book.publication_year,
        category: book.category,
        status: book.status,
        created_at: book.created_at,
        updated_at: book.updated_at,
      },
    });
    return newBook;
  }

  async editBook(id, data) {
    return await prisma.books.update({
      where: {
        id: +id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteBook(id) {
    return await prisma.books.delete({ where: { id: +id } });
  }

  async searchBook({ title, author, category }) {
    const book = await prisma.books.findMany({
      where: {
        OR: [{ title: { contains: title } }, { author: { contains: author } }, { category: { equals: category } }],
      },
    });
    return book
  }
}

export default books_service;
