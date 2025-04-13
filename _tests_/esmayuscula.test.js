const isUpperCase = require('../utils/isUpperCase');

test('una palabra este en mayuscula', () => {
  expect(isUpperCase(""HOLA"")).toBe("HOLA");
});

