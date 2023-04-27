const deepStrictEqual = require('assert');
const {describe, it} = require('node:test');
const object = require("../src/sprint.js")

const main = object.main;

describe("main", function() {
  it("should be true", function() {
    deepStrictEqual(1, main(1));
  });
});
