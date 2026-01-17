import config from '../config/api_config';
import axios from "axios";
import ServerError from "./errors";

export default class Citizenship {
  #citizenship;
  constructor() {
    this.#citizenship = 'https://' + config.HOST_URL + ':' + config.BACKEND_HTTPS_PORT + '/' + config.BACKEND_API_CITIZENSHIP;
  }

  async getCitizenship(){
    try{
      const response = await axios.get(`${this.#citizenship}`, {timeout: 5000});
      if (response.status !== 200) {
        return new Error(`HTTP ${response.status}`);
      }
      return response.data;

    } catch(error) {
      if (error.response.status === 400) {
        return new ServerError(error.response.data.errors).setErrors();
      }
      throw error;
    }
  }
}