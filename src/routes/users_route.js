import { Router } from "express";
import users_controller from "../controllers/users_controller.js";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const router = new Router();
const userController = new users_controller();

router.use(authToken);

router.get("/users", authorizePermission(Permission.BROWSE_USERS), (req, res) => userController.getAllUsers(req, res));
router.post("/users", authorizePermission(Permission.ADD_USERS), (req, res) => userController.register(req, res));
router.get("/users/:id", authorizePermission(Permission.BROWSE_USERS), (req, res) => userController.getUserById(req, res));
router.put("/users/:id", authorizePermission(Permission.EDIT_USERS), (req, res) => userController.updateUser(req, res));
router.delete("/users/:id", authorizePermission(Permission.DELETE_USERS), (req, res) => userController.deleteUser(req, res));

export default router;
