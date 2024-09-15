import { Router } from "express";
import visitor_loans_controller from "../controllers/visitor_loans_controller.js";

const router = new Router();
const LoanController = new visitor_loans_controller();

router.get("/visitor_loans", (req, res) => LoanController.getAllLoans(req, res));
router.get("/visitor_loans/:id", (req, res) => LoanController.getLoansById(req, res));
router.post("/visitor_loans", (req, res) => LoanController.newBorrowing(req, res));
router.put("/visitor_loans/:id", (req, res) => LoanController.upadateBorrowing(req, res));
router.delete("/visitor_loans/:id", (req, res) => LoanController.deleteBorrowing(req, res));

export default router;
