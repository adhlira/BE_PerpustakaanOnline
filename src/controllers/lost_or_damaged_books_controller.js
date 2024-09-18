import lost_or_damaged_books_service from "../services/lost_or_damaged_books_service.js";

const dataController = new lost_or_damaged_books_service();

class lost_or_damaged_books_controller {
  async getAllData(req, res) {
    try {
      const allData = await dataController.getAllData();
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getDataById(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid ID" });
      }
      const dataByID = await dataController.getDataById(req.params.id);
      if (!dataByID) {
        return res.status(404).json({ message: "Data not found" });
      } else {
        return res.status(200).json(dataByID);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createData(req, res) {
    try {
      const newData = await dataController.createNewData(req.body);
      return res.status(200).json({ message: "Added new data successfully", newData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateData(req, res) {
    try {
      const updatedData = await dataController.editData(req.params.id, req.body);
      return res.status(200).json({ message: "Updated data successfully", updatedData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteData(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid ID" });
      }
      const data = await dataController.getDataById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      await dataController.deleteData(req.params.id);
      return res.status(200).json({ message: "Deleted data succesfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default lost_or_damaged_books_controller;
