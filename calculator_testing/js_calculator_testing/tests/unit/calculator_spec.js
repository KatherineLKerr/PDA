var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function () {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal( calculator.runningTotal, 5 )
  })

  it('should be able to subtract', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('should be able to multiply', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('should be able to divide', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('should be able to concatenate numbers', function () {
    calculator.numberClick(1);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('should chain multiple operations', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 12)
  })

  it('should be able to clear running total without affecting calculation', function () {
    calculator.numberClick(9)
    calculator.operatorClick('*')
    calculator.numberClick(9)
    calculator.clearClick()
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 63)
  })
});
