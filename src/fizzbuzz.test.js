const fizzBuzz = require("./fizzbuzz");

test('should return "Fizz" for numbers divisible by 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});
