import { Router } from "express";
import books_controller from "../controllers/books_controller.js";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = new Router();
const booksController = new books_controller();

router.use(authToken)

router.get("/books", authorizePermission(Permission.BROWSE_BOOK), (req, res) => booksController.getAllBook(req, res));
router.get("/books/:id", authorizePermission(Permission.BROWSE_BOOK), (req, res) => booksController.getBookById(req, res));
router.post("/books", authorizePermission(Permission.ADD_BOOK), (req, res) => booksController.addNewBook(req, res));
router.put("/books/:id", authorizePermission(Permission.EDIT_BOOK), (req, res) => booksController.editBook(req, res));
router.delete("/books", authorizePermission(Permission.DELETE_BOOK), (req, res) => booksController.deleteBook(req, res));
router.post("/books/search", authorizePermission(Permission.BROWSE_BOOK), (req, res) => booksController.searchBook(req, res));

export default router;
