import reservation_controller from "../controllers/reservation_controller.js";
import { Router } from "express";

const reservationController = new reservation_controller();
const router = new Router();

router.get("/reservation", (req, res) => reservationController.getAllReservation(req, res));
router.get("/reservation/:id", (req, res) => reservationController.getReservationById(req, res));
router.post("/reservation", (req, res) => reservationController.createReservation(req, res));
router.put("/reservation/:id", (req, res) => reservationController.editReservation(req, res));
router.delete("/reservation/:id", (req, res) => reservationController.deleteReservation(req, res));

export default router;
