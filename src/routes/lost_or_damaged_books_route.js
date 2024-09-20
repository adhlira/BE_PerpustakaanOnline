import lost_or_damaged_books_controller from "../controllers/lost_or_damaged_books_controller.js";
import { Router } from "express";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = Router();

const dataController = new lost_or_damaged_books_controller();

router.use(authToken);

router.get("/lost_or_damaged_books", authorizePermission(Permission.BROWSE_LOST_OR_DAMAGED_BOOKS), (req, res) => dataController.getAllData(req, res));
router.get("/lost_or_damaged_books/:id", authorizePermission(Permission.BROWSE_LOST_OR_DAMAGED_BOOKS), (req, res) => dataController.getDataById(req, res));
router.post("/lost_or_damaged_books", authorizePermission(Permission.ADD_LOST_OR_DAMAGED_BOOKS), (req, res) => dataController.createData(req, res));
router.put("/lost_or_damaged_books/:id", authorizePermission(Permission.EDIT_LOST_OR_DAMAGED_BOOKS), (req, res) => dataController.updateData(req, res));
router.delete("/lost_or_damaged_books/:id", authorizePermission(Permission.DELETE_LOST_OR_DAMAGED_BOOKS), (req, res) => dataController.deleteData(req, res));

export default router;
