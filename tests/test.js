var expect = require("chai").expect;

it("da_truth", function() {
  expect(true).to.be.true;
});

it("arrays have length", function() {
  var array = [1,2,3];
  expect(array.length).to.exist;
});

describe("Hello world", function() {
  it("hello should say 'Hello world!'", function() {
    expect(hello()).to.equal("Hello world!");
  });
});

var hello = require("../index");
