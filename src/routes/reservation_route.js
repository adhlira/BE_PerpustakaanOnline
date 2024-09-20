import reservation_controller from "../controllers/reservation_controller.js";
import { Router } from "express";
import { Permission } from "../authorization.js";
import { authToken, authorizePermission } from "../middleware.js";

const reservationController = new reservation_controller();
const router = new Router();

router.use(authToken);

router.get("/reservation", authorizePermission(Permission.BROWSE_RESERVATION), (req, res) => reservationController.getAllReservation(req, res));
router.get("/reservation/:id", authorizePermission(Permission.BROWSE_RESERVATION), (req, res) => reservationController.getReservationById(req, res));
router.post("/reservation", authorizePermission(Permission.ADD_RESERVATION), (req, res) => reservationController.createReservation(req, res));
router.put("/reservation/:id", authorizePermission(Permission.EDIT_RESERVATION), (req, res) => reservationController.editReservation(req, res));
router.delete("/reservation/:id", authorizePermission(Permission.DELETE_RESERVATION), (req, res) => reservationController.deleteReservation(req, res));

export default router;
