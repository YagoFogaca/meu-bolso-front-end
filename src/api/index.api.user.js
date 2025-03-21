import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export class Api {
  static async login(user) {
    return (await axios.post("auth/login", user)).data;
  }

  static async updateUser(user_id, user) {
    console.log(user);
    return await axios.patch(`users/user/${user_id}`, user);
  }

  static async findAllMovimentUser(user_id, date) {
    return (await axios.get(`movements/movement/${user_id}?date=${date}`)).data;
  }

  static async createMoviment(moviment) {
    return (await axios.post("movements/movement", moviment)).data;
  }

  static async updateMovement(movement_id, movement) {
    return await axios.patch(`movements/movement/${movement_id}`, movement)
      .data;
  }

  static async deleteMovement(movement_id) {
    return await axios.delete(`movements/movement/${movement_id}`).data;
  }
}
