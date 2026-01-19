import config from '../config/api_config';
import axios from "axios";
import ServerError from "./errors";

export default class PersonalInfo {
  #hostAndPort;
  #birthday;
  #movingVariant;
  #maritalStatus;
  #sex;
  constructor() {
    this.#hostAndPort = 'https://' + config.HOST_URL + ':' + config.BACKEND_HTTPS_PORT;
    this.#birthday = config.BACKEND_API_BIRTHDAY;
    this.#movingVariant = this.#hostAndPort + '/' + config.BACKEND_API_PERSONAL + '/' + config.BACKEND_API_PERSONAL_MOVING;
    this.#maritalStatus = this.#hostAndPort + '/' + config.BACKEND_API_PERSONAL + '/' + config.BACKEND_API_PERSONAL_MARITAL;
    this.#sex = this.#hostAndPort + '/' + config.BACKEND_API_PERSONAL + '/' + config.BACKEND_API_PERSONAL_SEX;
  }

  async getBirthday() {
    try{
      const response = await axios.get(`${this.#hostAndPort + '/' + this.#birthday}`, {timeout: 5000});
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

  async getMovingVariants(){
    try{
      const response = await axios.get(`${this.#movingVariant}`, {timeout: 5000});
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

  async getSexVariants(){
    try{
      const response = await axios.get(`${this.#sex}`, {timeout: 5000});
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

  async getMaritalStatus(){
    try{
      const response = await axios.get(`${this.#maritalStatus}`, {timeout: 5000});
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