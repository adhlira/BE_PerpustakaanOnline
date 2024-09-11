import { Router } from "express";
import users_controller from "../controllers/users_controller.js";

const router = new Router();
const userController = new users_controller();

router.get("/users", (req, res) => userController.getAllUsers(req, res));
router.post("/users", (req, res) => userController.register(req, res));
router.get("/users/:id", (req, res) => userController.getUserById(req, res));
router.put("/users/:id", (req, res) => userController.updateUser(req, res));
router.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

export default router;
