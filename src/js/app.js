export default  class Validator {
  constructor(nikname){
    this.nikname = nikname;
  }

  validateUsername() {
    return (/^([a-z]+\d{0,3}[a-z]+)$/i.test(this.nikname));
  }
}


