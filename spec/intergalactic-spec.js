import Inter from './../src/intergalactic';

describe('Count', function() {

  it('should test earth age', function() {
    let myAge = new Inter(2018, 20);

    expect(myAge.calculateEarthAge()).toEqual(1);
  });

  it('should test mercury age', function() {
    let myAge = new Inter(2018, 20);

    expect(myAge.calculateMercuryhAge()).toEqual(0.24);
  });

  it('should test venus age', function() {
    let myAge = new Inter(2018, 20);

    expect(myAge.calculateVenusAge()).toEqual(0.62);
  });

  it('should test mars age', function() {
    let myAge = new Inter(2018, 20);

    expect(myAge.calculateMarsAge()).toEqual(1.88);
  });

  it('should test jupiter age', function() {
    let myAge = new Inter(1, 20);

    expect(myAge.calculateJupiterAge()).toEqual(11.86);
  });

  it('should test expected age', function() {
    let myAge = new Inter(2018, 20);

    expect(myAge.calculateExpectedEarth()).toEqual(19);
  });


});
