import config from '../config/api_config';
import axios from "axios";

export default class ResumeBackend {
  #host;
  #port;
  #resume;
  #hostAndPort;
  #formData
  constructor(formData) {
    this.#host = config.HOST_URL;
    this.#port = config.BACKEND_HTTPS_PORT;
    this.#resume = config.BACKEND_API_RESUME
    this.#hostAndPort = 'https://' + this.#host + ':' + this.#port;

    this.#formData = formData;
  }

  async postResume() {
    if (!this.#formData)
      throw new Error('Данные отсутствуют');

    try{
      const url = `${this.#hostAndPort + '/' + this.#resume}`;
      const response = await axios.post(url, this.#formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
      if (response.status === 201) {
        return response.data;
      }
    }catch(error){
      throw error;
    }
  }
}