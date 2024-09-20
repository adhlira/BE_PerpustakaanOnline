import { Router } from "express";
import member_loans_controller from "../controllers/member_loans_controller.js";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = new Router();
const LoanController = new member_loans_controller();

router.use(authToken)

router.get("/member_loans", authorizePermission(Permission.BROWSE_LOAN_MEMBER), (req, res) => LoanController.getAllLoans(req, res));
router.get("/member_loans/:id", authorizePermission(Permission.BROWSE_LOAN_MEMBER), (req, res) => LoanController.getLoansById(req, res));
router.post("/member_loans", authorizePermission(Permission.ADD_LOAN_MEMBER), (req, res) => LoanController.newBorrowing(req, res));
router.put("/member_loans/:id", authorizePermission(Permission.DELETE_LOAN_MEMBER), (req, res) => LoanController.upadateBorrowing(req, res));
router.delete("/member_loans/:id", authorizePermission(Permission.DELETE_LOAN_MEMBER), (req, res) => LoanController.deleteBorrowing(req, res));

export default router;
