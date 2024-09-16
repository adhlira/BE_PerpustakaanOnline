import { Router } from "express";
import login_controller from "../controllers/login_controller.js";

const router = new Router();
const loginController = new login_controller();

router.post("/login", (req, res) => loginController.loginUser(req, res));

export default router;
