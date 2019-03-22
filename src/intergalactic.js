export default class Intergalactic{
  constructor(date, expectancy){
    this.date = date;
    this.expectancy = expectancy;
  }

  get(){
    return this.expectancy;
  }

  calculateEarthAge() {
    let now = new Date();
    let currentYear = now.getFullYear();
    let birthYear = this.date.getFullYear();
    let age = currentYear - birthYear;
    if (now < new Date(this.date.setFullYear(currentYear))) {
      age = age - 1;
    }
    return age;
  }

}
