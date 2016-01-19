var expect = require("chai").expect;

describe("Mocha & Chai", function() {
  it("da_truth", function() {
    expect(true).to.be.true;
  });
});

describe("async tests", function() {
  it("arrays have length", function() {
    var array = [1,2,3];
    setTimeout(function() {
      expect(array.length).to.exist;
      done();
    }, 0);
  });
});

describe("Hello world", function() {
  it("hello should say 'Hello world!'", function() {
    expect(hello()).to.equal("Hello world!");
  });
});

var hello = require("../index");

describe("utility functions", function() {
  describe("range", function() {
    var range = require("../range.js");
    it("range should output an array", function() {
      expect(range()).to.be.an("array");
    });
  });
});
