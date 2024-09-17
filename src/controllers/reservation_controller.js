import reservation_service from "../services/reservation_service.js";

const reservationController = new reservation_service();

class reservation_controller {
  async getAllReservation(req, res) {
    try {
      const allReservation = await reservationController.getAllReservation();
      return res.status(200).json(allReservation);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getReservationById(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid ID" });
      }
      const reservation = await reservationController.getReservationById(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: "Reservation data not found" });
      } else {
        return res.status(200).json(reservation);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createReservation(req, res) {
    try {
      const newData = await reservationController.createReservation(req.body);
      console.log(newData);
      return res.status(200).json({ message: "Added new data succesfully", newData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async editReservation(req, res) {
    try {
      const updatedReservation = await reservationController.editReservation(req.params.id, req.body);
      return res.status(200).json({ message: "Added new data successfully", updatedReservation });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteReservation(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid reservation ID" });
      }
      const reservation = await reservationController.getReservationById(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: "Reservation data not found" });
      }
      await reservationController.deleteReservation(req.params.id);
      return res.status(200).json({ message: "Deleted data successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default reservation_controller;
