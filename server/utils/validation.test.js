const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    //var valueToCheck = 33;
    var valueToCheck = {
      text: 'joo'
    }
    var returnValue = isRealString (valueToCheck);
    expect(returnValue).toBe(false);

  });
  it('should reject string with only spaces', () => {
    var valueToCheck = '   ';
    var returnValue = isRealString (valueToCheck);
    expect(returnValue).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    var valueToCheck = ' d d d d  ';
    var returnValue = isRealString (valueToCheck);
    expect(returnValue).toBe(true);
  });
});
