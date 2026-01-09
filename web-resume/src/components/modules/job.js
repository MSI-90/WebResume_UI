import config from "../config/api_config";
import axios from "axios";

export default class JobData {
  #currency;
  #workSchedule;
  #employmentType;
  #hostAndPort;
  constructor() {
    this.#currency = config.BACKEND_API_CURRENCY
    this.#workSchedule = config.BACKEND_API_WORK_SCHEDULE;
    this.employmentType = config.BACKEND_API_EMPLOYMENT_TYPE;
    this.#hostAndPort = 'https://' + config.HOST_URL + ':' + config.BACKEND_HTTPS_PORT;
  }

  async getCurrency() {
    try{
      const currencies = await axios.get(`${this.#hostAndPort + '/' + this.#currency}`);
      if (currencies.status === 200)
        return currencies.data;
    }catch(error){
      throw error;
    }
  }

  async getEmploymentType() {
    try{
      const employmentTypes = await axios.get(`${this.#hostAndPort + '/' + this.employmentType}`);
      if (employmentTypes.status === 200)
        return employmentTypes.data;
    }catch(error){
      throw error;
    }
  }

  async getWorkSchedule() {
    try{
      const schedule = await axios.get(`${this.#hostAndPort + '/' + this.#workSchedule}`);
      if (schedule.status === 200)
        return schedule.data;
    }catch(error){
      throw error;
    }
  }
}