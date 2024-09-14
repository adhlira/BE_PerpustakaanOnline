import member_loans_service from "../services/member_loans_service.js";

const LoanController = new member_loans_service();

class member_loans_controller {
  async getAllLoans(req, res) {
    try {
      const allLoans = await LoanController.getAllBorrowing();
      return res.status(200).json(allLoans);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getLoansById(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid ID" });
      }
      const loan = await LoanController.getBorrowingById(req.params.id);
      if (!loan) {
        return res.status(404).json({ message: "Data Not Found" });
      } else {
        return res.status(200).json(loan);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async newBorrowing(req, res) {
    try {
      const newData = await LoanController.createBorrowing(req.body);
      return res.status(200).json({ message: "Added new data succesfully", newData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async upadateBorrowing(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid ID" });
      }
      const loan = await LoanController.getBorrowingById(req.params.id);
      if (!loan) {
        return res.status(404).json({ message: "Data not found" });
      } else {
        const updatedLoan = await LoanController.editBorrowing(req.params.id, req.body);
        console.log(req.body);
        return res.status(200).json({ message: "Updated data successfully", updatedLoan });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteBorrowing(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "Invalid ID" });
      }
      const loan = await LoanController.getBorrowingById(req.params.id);
      if (!loan) {
        return res.status(404).json({ message: "Data not found" });
      } else {
        await LoanController.deleteBorrowing(req.params.id);
        return res.status(200).json({ message: "Delete Data successfully" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default member_loans_controller;
