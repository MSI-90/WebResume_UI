import axios from "axios";

export default class Social {
  #host;
  #port;
  #social;
  constructor() {
    this.host = process.env.REACT_APP_HOST;
    this.port = process.env.REACT_APP_PORT;
    this.social = process.env.REACT_APP_SOCIAL_SOCIAL;
  }

  async getSocial() {
    try{
      console.log(this.host);
      const str = `${this.#host/this.#port/this.#social}`;
      console.log(str);
      const social = await axios.get(`${this.#host/this.#port/this.#social}`, {});
      console.log(social);
    }catch(error){
      console.log(error);
    }

  }
}