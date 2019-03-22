export default class Inter {
  constructor(dob, exp){
  this.dob = dob;
  this.exp = exp;
  }

  calculateEarthAge() {
  return 2019 - this.dob;
  }

  calculateMercuryAge(){
    return this.calculateEarthAge()*0.24;
  }

  calculateVenusAge(){
    return this.calculateEarthAge()*0.62;
  }

  calculateMarsAge(){
    return this.calculateEarthAge()*1.88;
  }

  calculateJupiterAge(){
    return this.calculateEarthAge()*11.86;
  }

  calculateExpectedEarth(){
    return this.exp - this.calculateEarthAge();
  }

  calculateExpectedMercury(){
    return this.exp*0.24 - this.calculateMercuryAge();
  }

  calculateExpectedVenus(){
    return this.exp*0.62 - this.calculateVenusAge();
  }
  calculateExpectedMars(){
    return this.exp*1.88 - this.calculateMarsAge();
  }
  calculateExpectedJupiter(){
    return this.exp*11.86 - this.calculateJupiterAge();
  }

}
