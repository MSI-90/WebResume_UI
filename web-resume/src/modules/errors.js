
export default class ServerError {
  #errors;
  constructor(errors){
    this.#errors = errors;
  }

  setErrors(){
    if (!this.#errors)
      return;

    const errorValues = Object.values(this.#errors);
    if (errorValues.length < 0)
      return;

    return errorValues;
  }
}