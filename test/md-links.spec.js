const mdLinks = require('../index.js');
const path = require('path')


test('the data is object', () => {
  return mdLinks.throughFolder(path.resolve()).then(data => {
    expect(typeof(data)).toBe('Array');
  });
});

test('the data is an Array', () => {
  return mdLinks.takeLinks('./README.md').then(data => {
    expect(typeof(data)).toBe('Array');
  });
});
