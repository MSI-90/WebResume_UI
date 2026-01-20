import config from '../config/api_config';
import axios from "axios";
import ServerError from "./errors";

export default class Photo {
  #host;
  #port;
  #hostAndPort;
  #photo
  constructor() {
    this.#host = config.HOST_URL;
    this.#port = config.BACKEND_HTTPS_PORT;
    this.#hostAndPort = 'https://' + this.#host + ':' + this.#port;
    this.#photo = config.BACKEND_API_PHOTO;
  }

  async sendPhoto(photoFile) {
    if(!this.checkPhoto(photoFile)) throw new Error('Фото отсутствует');

    try{
      const url = `${this.#hostAndPort + '/' + this.#photo}`;
      let file = {
        'File': photoFile
      }
      const response = await axios.post(url, file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
      if (response.status === 200) {
        return response.data;
      }
    } catch(error) {
      if (error.response.status === 400) {
        throw new ServerError(error.response.data.errors).setErrors();
      }
      throw error;
    }
  }

  checkPhoto(photoFile) {
    if(photoFile === null || photoFile === undefined) return false;
    if(typeof photoFile !== "object") return false;

    return photoFile.name && photoFile.size && photoFile.type;
  }
}