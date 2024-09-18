import lost_or_damaged_books_controller from "../controllers/lost_or_damaged_books_controller.js";
import { Router } from "express";

const router = Router();

const dataController = new lost_or_damaged_books_controller();

router.get("/lost_or_damaged_books", (req, res) => dataController.getAllData(req, res));
router.get("/lost_or_damaged_books/:id", (req, res) => dataController.getDataById(req, res));
router.post("/lost_or_damaged_books", (req, res) => dataController.createData(req, res));
router.put("/lost_or_damaged_books/:id", (req, res) => dataController.updateData(req, res));
router.delete("/lost_or_damaged_books/:id", (req, res) => dataController.deleteData(req, res));

export default router;
