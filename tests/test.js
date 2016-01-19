var expect = require("chai").expect;

describe("Mocha & Chai", function() {
  it("true is indeed true", function() {
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

describe("hello world", function() {
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

    it("array should be the length passed as the argument", function() {
      expect(range()).to.have.length(0);
      expect(range(1)).to.have.length(1);
      expect(range(100)).to.have.length(100);
    });
  });
});
