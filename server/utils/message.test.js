var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Matti';
    var latitude = 1;
    var longitude = 2;
    var url = 'https://www.google.com/maps?q=1,2'

    var viesti = generateLocationMessage(from, latitude, longitude);

    expect(viesti).toInclude({from, url});
    expect(viesti.createdAt).toBeA('number');
  });
});
