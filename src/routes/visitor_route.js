import { Router } from "express";
import visitors_controller from "../controllers/visitors_controller.js";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = new Router();
const visitorController = new visitors_controller();

router.use(authToken)

router.get("/visitors", authorizePermission(Permission.BROWSE_VISITOR), (req, res) => visitorController.getAllVisitors(req, res));
router.get("/visitors/:id", authorizePermission(Permission.BROWSE_VISITOR), (req, res) => visitorController.getVisitorById(req, res));
router.post("/visitors", authorizePermission(Permission.ADD_VISITOR), (req, res) => visitorController.newVisitor(req, res));
router.put("/visitors/:id", authorizePermission(Permission.EDIT_VISITOR), (req, res) => visitorController.editVisitor(req, res));
router.delete("/visitors/:id", authorizePermission(Permission.DELETE_VISITOR), (req, res) => visitorController.deleteVisitor(req, res));

export default router;
