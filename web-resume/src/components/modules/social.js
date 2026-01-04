import config from '../config/api_config';
import axios from "axios";

export default class SocialVariant {
  #host;
  #port;
  #social;
  constructor() {
    this.#host = config.HOST_URL;
    this.#port = config.BACKEND_HTTPS_PORT;
    this.#social = config.BACKEND_API_SOCIAL
  }

  async getSocial() {
    try{
      const social = await axios.get(`${'https://' + this.#host + ':' + this.#port + '/' + this.#social}`);
      if (social.status === 200)
        return social.data;
    }catch(error){
      throw error;
    }
  }
}