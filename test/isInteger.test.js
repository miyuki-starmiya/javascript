
const isInteger = require("./isInteger");

const integerNumbers = [
  [-1, true],
  [1.23, true],
  [3, true],
]

test.each(integerNumbers)(
  "validate multiple values",
  (value, result) => expect(isInteger(value)).toBe(result)
);

