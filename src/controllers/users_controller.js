import users_service from "../services/users_service.js";

const userService = new users_service();

class users_controller {
  async getAllUsers(req, res) {
    try {
      const allUser = await userService.getAllUsers();
      return res.status(200).json(allUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "User Invalid" });
      }
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async register(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.editUser(req.params.id, req.body);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ message: "Updated Data failed", error });
    }
  }

  async deleteUser(req, res) {
    try {
      if (isNaN(req.params.id)) {
        return res.status(401).json({ message: "User invalid" });
      }
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      await userService.deleteUser(req.params.id);
      return res.status(200).json({ message: "User Successfully Deleted" });
    } catch (error) {
      return res.status(500).json({ message: "Deleted Data Failed", error });
    }
  }
}

export default users_controller;
