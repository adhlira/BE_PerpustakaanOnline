import { Router } from "express";
import books_controller from "../controllers/books_controller.js";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = new Router();
const booksController = new books_controller();

router.use(authToken)

router.get("/books", authorizePermission(Permission.BROWSE_BOOK), (req, res) => booksController.getAllBook(req, res));
router.get("/books/:id", (req, res) => booksController.getBookById(req, res));
router.post("/books", (req, res) => booksController.addNewBook(req, res));
router.put("/books/:id", (req, res) => booksController.editBook(req, res));
router.delete("/books", (req, res) => booksController.deleteBook(req, res));
router.post("/books/search", (req, res) => booksController.searchBook(req, res));

export default router;
