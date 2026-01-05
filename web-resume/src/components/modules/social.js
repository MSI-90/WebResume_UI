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
      const social = await axios.get(`${this.#hostAndPort + '/' + this.#social}`);
      if (social.status === 200)
        return social.data;
    }catch(error){
      throw error;
    }
  }
}