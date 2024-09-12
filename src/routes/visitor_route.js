import { Router } from "express";
import visitors_controller from "../controllers/visitors_controller.js";

const router = new Router();
const visitorController = new visitors_controller();

router.get("/visitors", (req, res) => visitorController.getAllVisitors(req, res));
router.get("/visitors/:id", (req, res) => visitorController.getVisitorById(req, res));
router.post("/visitors", (req, res) => visitorController.newVisitor(req, res));
router.put("/visitors/:id", (req, res) => visitorController.editVisitor(req, res));
router.delete("/visitors/:id", (req, res) => visitorController.deleteVisitor(req, res));

export default router;
