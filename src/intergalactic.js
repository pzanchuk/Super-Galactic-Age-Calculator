export default class Inter {
  constructor(dob, exp){
  this.dob = dob;
  this.exp = exp;
  }

  calculateEarthAge() {
  return 2019 - this.dob;
  }

  calculateMercuryAge(){
    return this.dob*0.24;
  }

  calculateVenusAge(){
    return this.dob*0.62;
  }

  calculateMarsAge(){
    return this.dob*1.88;
  }

  calculateJupiterAge(){
    return this.dob*11.864;
  }

  calculateExpectedMercury(){
    return this.exp - this.calculateMercuryAge();
  }
  calculateExpectedEarth(){
    return this.exp - this.calculateEarthAge();
  }
  calculateExpectedVenus(){
    return this.exp - this.calculateVenusAge();
  }
  calculateExpectedMars(){
    return this.exp - this.calculateMarsAge();
  }
  calculateExpectedJupiter(){
    return this.exp - this.calculateJupiterAge();
  }


}
