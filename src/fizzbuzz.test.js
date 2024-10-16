const fizzBuzz = require("./fizzbuzz");

test('should return "Fizz" for numbers divisible by 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test('should return "Buzz" for numbers divisible by 5', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test('should return "FizzBuzz" for numbers divisible by both 3 and 5', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});
