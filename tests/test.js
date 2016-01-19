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

    it("should return an array range", function() {
      expect(range(3)).to.eql([0,1,2]);
      expect(range(5)).to.eql([0,1,2,3,4]);
    });

    it("should accept a start argument", function() {
      expect(range(3,5)).to.eql([3,4]);
      expect(range(4,9)).to.eql([4,5,6,7,8]);
    });
  });

  describe("rangeObj", function() {
    var rangeObj = require("../rangeObj");
    it("should return an object", function() {
      expect(rangeObj()).to.be.an.object;
    });

    it("should return an object range", function() {
      expect(rangeObj()).to.eql({});
      expect(rangeObj(3)).to.eql({0:0, 1:1, 2:2});
      expect(rangeObj(5)).to.eql({0:0, 1:1, 2:2, 3:3, 4:4});
    });
  });
});
