const mdLinks = require('../index.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

describe('savePost', () => {
  it('debería de poder agregar un post', () => {
    return savePost('algun post').then((data) => {
      expect(data).toBe('algun post');
    });
  });
});