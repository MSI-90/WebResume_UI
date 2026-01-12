import config from '../config/api_config';
import errors from './errors';
import axios from "axios";
import ServerError from "./errors";

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
      const response = await axios.post(url, this.constructObjectData(), {
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
      if (response.status === 201) {
        return response.data;
      }
    }catch(error){
      if (error.response.status === 400) {
        return new ServerError(error.response.data.errors).setErrors();
      }
      throw error;
    }
  }

  constructObjectData() {
    return {
      templateId: this.#formData.templateId,
      firstName: this.#formData.firstName,
      lastName: this.#formData.lastName,
      fatherName: this.#formData.fatherName,
      photo: this.#formData.photo,
      ContactInfo: JSON.stringify(this.contactInfo()),
    };
  }

  contactInfo() {
    if (!this.#formData) return null;
    if (this.#formData.socialType !== null && this.#formData.socialLink.length > 0)
      return {
        Phone: this.#formData.tel ?? '',
        Email: this.#formData.email,
        SocialNetwork: {
          SocialType: this.#formData.socialType ?? 0,
          SocialLink: this.#formData.socialLink ?? ''
        }
    }

    return {
      Phone: this.#formData.tel ?? '',
      Email: this.#formData.email
    }
  }
}