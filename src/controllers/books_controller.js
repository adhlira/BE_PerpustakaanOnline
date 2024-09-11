import bookService from "../services/books_service.js";

const book_service = new bookService();

class books_controller {
  async getAllBook(req, res) {
    try {
      const allBooks = book_service.getAllBook();
      console.log(allBooks);
      return res.status(200).json(allBooks);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getBookById(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Book Invalid" });
      }
      const book = book_service.getBookById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addNewBook(req, res) {
    try {
      const newBook = await book_service.createBook(req.body);
      return res.status(200).json(newBook);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async editBook(req, res) {
    try {
      const updatedBook = book_service.editBook(req.params.id, req.body);
      return res.status(200).json(updatedBook);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteBook(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Book Invalid" });
      }
      const book = book_service.getBookById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book is Not Found" });
      }
      await book_service.deleteBook(req.params.id);
      return res.status(200).json({ message: "Book Successfully Deleted" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default books_controller;
