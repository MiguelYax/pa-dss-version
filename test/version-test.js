/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/01/2018
 * tester... 
 */
const test = require('node:test')
const { strictEqual, deepStrictEqual } = require('node:assert')
const version = require("../version");

test("Increment major version", (t) => {
  const result = version.up("2.1.1.1.23", "major");
  strictEqual(result, "3.0.0.0.0");
});
test("Increment minor version", (t) => {
  const result = version.up("2.1.1.1.23", "minor");
  strictEqual(result, "2.2.0.0.0");
});
test("Increment secure version", (t) => {
  const result = version.up("2.1.1.1.23", "secure");
  strictEqual(result, "2.1.2.1.23");
});
test("Increment crud version", (t) => {
  const result = version.up("2.1.1.1.23", "crud");
  strictEqual(result, "2.1.1.2.23");
});
test("Increment interface version", (t) => {
  const result = version.up("2.1.1.1.23", "interface");
  strictEqual(result, "2.1.1.1.24");
});
test("Decrement major version", (t) => {
  const result = version.down("2.1.1.1.23", "major");
  strictEqual(result, "1.0.0.0.0");
});
test("Decrement minor version", (t) => {
  const result = version.down("2.1.1.1.23", "minor");
  strictEqual(result, "2.0.0.0.0");
});
test("Decrement secure version", (t) => {
  const result = version.down("2.1.1.1.23", "secure");
  strictEqual(result, "2.1.0.1.23");
});
test("Decrement crud version", (t) => {
  const result = version.down("2.1.1.1.23", "crud");
  strictEqual(result, "2.1.1.0.23");
});
test("Decrement interface version", (t) => {
  const result = version.down("2.1.1.1.23", "interface");
  strictEqual(result, "2.1.1.1.22");
});
test("version tag parse", (t) => {
  const result = version.parse('1.2.3.4.5');
  deepStrictEqual(result, {
    major: 1,
    minor: 2,
    secure: 3,
    crud: 4,
    interface: 5
  });
});
