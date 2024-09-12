import visitors_service from "../services/visitors_service.js";

const visitorService = new visitors_service();

class visitors_controller {
  async getAllVisitors(req, res) {
    try {
      const allVisitors = await visitorService.getAllVisitors();
      return res.status(200).json(allVisitors);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getVisitorById(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Visitors ID invalid" });
      }
      const visitor = await visitorService.getVisitorById(req.params.id);
      if (!visitor) {
        return res.status(404).json({ message: "Visitor is Not found" });
      } else {
        return res.status(200).json(visitor);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async newVisitor(req, res) {
    try {
      const visitor = await visitorService.createVisitor(req.body);
      return res.status(200).json({ message: "Added visitor succesfully", visitor });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async editVisitor(req, res) {
    try {
      const updatedVisitor = await visitorService.editVisitor(req.params.id, req.body);
      return res.status(200).json({ message: "Visitor successfully updated", updatedVisitor });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteVisitor(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Visitor ID invalid" });
      }
      const visitor = await visitorService.getVisitorById(req.params.id);
      if (!visitor) {
        return res.status(404).json({ message: "Visitor not found" });
      } else {
        await visitorService.deleteVisitor(req.params.id);
        return res.status(200).json({ message: "Deleted visitor successfully" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default visitors_controller;
