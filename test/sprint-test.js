const deepStrictEqual = require('assert');
const {describe, it} = require('node:test');
const object = require("../src/sprint.js")

const sprint = object.sprint;

describe("sprint", function() {
  it("should be true", function() {
    deepStrictEqual([9], sprint([9]));
  });
});
