const mdLinks = require('../index.js');
const path = require('path')


test('the data is object', () => {
  return mdLinks.mdLinks(path.resolve()).then(data => {
    expect(data).toBe('object');
  });
});

test('the data is an Array', () => {
  return mdLinks.takeLinks('./README.md').then(data => {
    expect(data).toBe('Array');
  });
});
