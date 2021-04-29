const { test, expect } = require("@jest/globals");
const { accepta } = require("./LRU_Cache_Test");

test('a equal a', () => {
  expect(accepta(1)).toBe(1)
} )