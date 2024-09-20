import { Router } from "express";
import visitor_loans_controller from "../controllers/visitor_loans_controller.js";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = new Router();
const LoanController = new visitor_loans_controller();

router.use(authToken)

router.get("/visitor_loans", authorizePermission(Permission.BROWSE_LOAN_VISITOR), (req, res) => LoanController.getAllLoans(req, res));
router.get("/visitor_loans/:id", authorizePermission(Permission.BROWSE_LOAN_VISITOR), (req, res) => LoanController.getLoansById(req, res));
router.post("/visitor_loans", authorizePermission(Permission.ADD_LOAN_VISITOR), (req, res) => LoanController.newBorrowing(req, res));
router.put("/visitor_loans/:id", authorizePermission(Permission.EDIT_LOAN_VISITOR), (req, res) => LoanController.upadateBorrowing(req, res));
router.delete("/visitor_loans/:id", authorizePermission(Permission.DELETE_LOAN_VISITOR), (req, res) => LoanController.deleteBorrowing(req, res));

export default router;
