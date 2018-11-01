/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/01/2018
 * tester... 
 */
var chai = require("chai");
var version = require("../version");


var assert = chai.assert,
  should = chai.should(),
  expect = chai.expect;

describe("PA DSS Version - Testing...", function() {
  describe("Increment version", function() {
    it("Check major version", function() {
      var result = version.up("2.1.1.1.23", "major");
      assert.equal(result, "3.0.0.0.0");
    });
    it("Check minor version", function() {
      var result = version.up("2.1.1.1.23", "minor");
      assert.equal(result, "2.2.0.0.0");
    });
    it("Check secure version", function() {
      var result = version.up("2.1.1.1.23", "secure");
      assert.equal(result, "2.1.2.1.23");
    });
    it("Check crud version", function() {
      var result = version.up("2.1.1.1.23", "crud");
      assert.equal(result, "2.1.1.2.23");
    });
    it("Check innerface version", function() {
      var result = version.up("2.1.1.1.23", "innerface");
      assert.equal(result, "2.1.1.1.24");
    });
  });
  describe("Decrement version", function() {
    it("Check major version", function() {
      var result = version.down("2.1.1.1.23", "major");
      assert.equal(result, "1.0.0.0.0");
    });
    it("Check minor version", function() {
      var result = version.down("2.1.1.1.23", "minor");
      assert.equal(result, "2.0.0.0.0");
    });
    it("Check secure version", function() {
      var result = version.down("2.1.1.1.23", "secure");
      assert.equal(result, "2.1.0.1.23");
    });
    it("Check crud version", function() {
      var result = version.down("2.1.1.1.23", "crud");
      assert.equal(result, "2.1.1.0.23");
    });
    it("Check innerface version", function() {
      var result = version.down("2.1.1.1.23", "innerface");
      assert.equal(result, "2.1.1.1.22");
    });
  });
});
