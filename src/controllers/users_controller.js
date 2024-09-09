import users_service from "../services/users_service.js";

const userService = new users_service();

class users_controller {
  async getAllUsers(req, res) {
    const allUser = await userService.getAllUsers();
    res.status(200).json(allUser);
  }
  //   constructor(userService) {
  //     this.userService = userService;
  //   }

  //   async allData(req, res) {
  //     try {
  //       const user = await this.userService.getAllData();
  //       res.status(300).json(user);
  //     } catch (error) {
  //       res.status(400).json({ error: error.message });
  //     }
  //   }
}

export default users_controller;
