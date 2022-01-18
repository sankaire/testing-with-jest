const { expect } = require("@jest/globals");
const sum = require("../sum");

test("should return the sum of two numbers", () => {
  expect(sum(4, 4)).toBe(8);
});
