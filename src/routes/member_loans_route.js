import { Router } from "express";
import member_loans_controller from "../controllers/member_loans_controller.js";

const router = new Router();
const LoanController = new member_loans_controller();

router.get("/member_loans", (req, res) => LoanController.getAllLoans(req, res));
router.get("/member_loans/:id", (req, res) => LoanController.getLoansById(req, res));
router.post("/member_loans", (req, res) => LoanController.newBorrowing(req, res));
router.put("/member_loans/:id", (req, res) => LoanController.upadateBorrowing(req, res));
router.delete("/member_loans/:id", (req, res) => LoanController.deleteBorrowing(req, res));

export default router;
