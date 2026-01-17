import config from '../config/api_config';
import axios from "axios";

export default class SocialVariant {
  #host;
  #port;
  #social;
  #hostAndPort;
  constructor() {
    this.#host = config.HOST_URL;
    this.#port = config.BACKEND_HTTPS_PORT;
    this.#social = config.BACKEND_API_SOCIAL
    this.#hostAndPort = 'https://' + this.#host + ':' + this.#port;
  }

  async getSocial() {
    try{
      const response = await axios.get(`${this.#hostAndPort + '/' + this.#social}`, {timeout: 5000});
      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.data;
    } catch(error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message ||
          error.message ||
          'Network Error'
        );
      }
      throw error;
    }
  }
}