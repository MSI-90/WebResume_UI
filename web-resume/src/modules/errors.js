
export default class ServerError {
  #errors;
  constructor(errors){
    this.#errors = errors;
  }

  setErrors(){
    if (!this.#errors) return;
    if (Array.isArray(this.#errors)) return this.#errors;
    if (typeof this.#errors === "object") return Object.values(this.#errors);
    return [this.#errors];
  }
}