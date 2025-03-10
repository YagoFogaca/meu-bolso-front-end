import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export class Api {
  static async login(user) {
    return (await axios.post("auth/login", user)).data;
  }

  static async createMoviment(moviment) {
    return (await axios.post("movements/movement", moviment)).data;
  }
}
