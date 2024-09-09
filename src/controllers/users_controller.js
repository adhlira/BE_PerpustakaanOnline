import users_service from "../services/users_service.js";

const userService = new users_service();

class users_controller {
  async getAllUsers(req, res) {
    const allUser = await userService.getAllUsers();
    res.status(200).json(allUser);
  }

  async register(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default users_controller;
