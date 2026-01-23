import config from '../config/api_config';
import axios from "axios";
import ServerError from "./errors";

export default class ResumeBackend {
  #host;
  #port;
  #resume;
  #hostAndPort;
  #formData;
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
          'Content-Type': 'application/json'
        }});
      if (response.status === 201) {
        return response.data;
      }
    } catch(error) {
      if (error.response) {
        if (error.response.status === 400) {
          throw new ServerError(error.response.data.errors).setErrors();
        }

        if (error.response.status >= 500) {
          throw new ServerError('Ошибка на стороне сервера').setErrors();
        }

      } else if (error.request) {
        throw new ServerError('Ошибка сети, удаленный сервер не отвечает').setErrors();

      } else {
        throw new ServerError(error.message).setErrors();
      }
    }
  }

  constructObjectData() {
    return {
      templateId: this.#formData.templateId,
      firstName: this.#formData.firstName,
      lastName: this.#formData.lastName,
      fatherName: this.#formData.fatherName,
      PhotoId: this.#formData.photo,
      ContactInfo: !this.contactInfo() ? null : this.contactInfo(),
      PurposeResume: this.goalInfo(),
      DesiredJob: this.jobInfo(),
      PersonalInfo: this.personalInfo(),
    };
  }

  contactInfo() {
    if (!this.#formData) return null;
    if (!this.#formData.email) return null;

    if (this.#formData.socialLink?.length > 0) {
      if(this.checkFieldAsNumber([this.#formData.socialType]) === false)
        return null;

      return ({
        'Phone': this.#formData.phone ?? null,
        'Email': this.#formData.email,
        'SocialNetwork': {
          'SocialType': Number.parseInt(this.#formData.socialType, 10),
          'SocialLink': this.#formData.socialLink ?? ''
        }
      })
    }

    return ({
      'Phone': this.#formData.phone ?? null,
      'Email': this.#formData.email
    })
  }

  goalInfo(){
    if (!this.#formData) return null;

    let goal = this.#formData.goal;
    if (!goal || typeof goal !== 'string') return null;

    // Очищаем от HTML-сущностей
    goal = goal
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");

    // Нормализуем пробелы
    goal = goal.replace(/\s+/g, ' ').trim();

    if (!goal) return null;

    return this.validText(goal) ? goal : null;
  }

  validText(text){
    // Запрещаем HTML-спецсимволы
    if (/[<>&"'`]/.test(text)) {
      return false;
    }

    // Разрешаем буквы, цифры, пробел, пунктуацию (без &, <, >, ", ')
    const regex =  /^(?=.*\p{L})[\p{L}\p{N}\s!#$%()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/u;
    return regex.test(text);
  }

  jobInfo(){
    if (!this.#formData || !this.#formData.jobTitle) return null;

    const checkNaN = this.checkFieldAsNumber([
      this.#formData.employmentType,
      this.#formData.workSchedule,
      this.#formData.desiredSalary,
      this.#formData.currency]
    );
    if (!checkNaN) return null;

    if (this.#formData.byAgreement)
      return ({
        'JobTitle': this.#formData.jobTitle  ,
        'DesiredSalary': null,
        'Currency': null,
        'ByAgreement': this.#formData.byAgreement,
        'EmploymentType': Number.parseInt(this.#formData.employmentType, 10),
        'WorkSchedule': Number.parseInt(this.#formData.workSchedule, 10)
      })

    return ({
      'JobTitle': this.#formData.jobTitle  ,
      'DesiredSalary': Number.parseInt(this.#formData.desiredSalary, 10),
      'Currency': Number.parseInt(this.#formData.currency, 10),
      'ByAgreement': isNaN(Number.parseInt(this.#formData.desiredSalary, 10)) ? true :this.#formData.byAgreement,
      'EmploymentType': Number.parseInt(this.#formData.employmentType, 10),
      'WorkSchedule': Number.parseInt(this.#formData.workSchedule, 10)
    })
  }

  // TODO: пока пусть так, но далее пересмотреть избыточность проверки набора данных в массиве.
  personalInfo(){
    if (!this.#formData) return null;

    const arr = [
      this.#formData.city,
      this.#formData.dateOfBirth,
      this.#formData.monthOfBirth,
      this.#formData.yearOfBirth
    ];

    if (arr.some(item => item === null || item === '')) return null;

    const checkNaN = this.checkFieldAsNumber([
      this.#formData.moving,
      this.#formData.sex,
      this.#formData.citizenship,
      this.#formData.marital]
    );

    if (!checkNaN) return null;

    return ({
      'City': this.#formData.city,
      "IsDualCitizenship": this.#formData.isDualCitizenship,
      "CitizenshipIds": [this.#formData.citizenship],
      'Birthday': `${this.#formData.yearOfBirth}-${this.#formData.monthOfBirth
        .toString().padStart(2, '0')}-${this.#formData.dateOfBirth
        .toString().padStart(2, '0')}`,
      'IsChildren': this.#formData.children,
      'Sex': Number.parseInt(this.#formData.sex, 10),
      'Moving': Number.parseInt(this.#formData.moving, 10),
      'MaritalStatus': Number.parseInt(this.#formData.marital, 10),
    });
  }

  checkFieldAsNumber(args) {
    if (!Array.isArray(args)) return false;

    return !args.every(item => item === '' || item === undefined || item === null || isNaN(Number(item)));
  }

}