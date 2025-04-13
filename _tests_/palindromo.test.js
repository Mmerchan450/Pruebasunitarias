const palindromo = require('../utils/palindromo');

test('invertir una palabra', () => {
expect(palindromo("hola")).toBe("olah");
});

const palindromo = require('../utils/palindromo');

test('invierte la palabra "hola"', () => {
  expect(palindromo("hola")).toBe("aloh");
});

test('invierte la palabra "ana"', () => {
  expect(palindromo("ana")).toBe("ana");
});