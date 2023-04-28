const deepStrictEqual = require('assert');
const {describe, it} = require('node:test');
const {sprint} = require("../src/sprint.js")

describe("sprint", function() {
  it("should halt at the start", function() {
    deepStrictEqual([9], sprint([9]));
  });

  it("should assign a value to a memory location", function() {
    deepStrictEqual(sprint([0, 1, 5, 9]), [0, 1, 5, 9, null, 1, null, null, null, null]);
  });
});
