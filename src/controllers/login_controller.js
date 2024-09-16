import login_service from "../services/login_service.js";

const loginService = new login_service();

class login_controller {
  async loginUser(req, res) {
    try {
      const login = await loginService.login(req.body);
      return res.status(200).json(login);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default login_controller;
