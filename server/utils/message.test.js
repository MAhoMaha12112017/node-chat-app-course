var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // call generateMessage with values (2)
    var from = 'Matti';
    var text = 'Muisto';
    var viesti = generateMessage (from, text);

    expect(viesti).toInclude({from, text});
    expect(viesti.createdAt).toBeA('number');
  });
});
