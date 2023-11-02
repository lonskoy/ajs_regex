export default  class Validator {
  constructor(nikname){
    this.nikname = nikname;
  }

  validateUsername() {
    if(/ \w | [0-9] | - /.test(nikname)) {
      return true;
    }
    else return false;
  }
}