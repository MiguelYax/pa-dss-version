/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/01/2018
 * tester... 
 */
const test = require('ava')
const version = require("../version");

test("Increment major version", (t) => {
  const result = version.up("2.1.1.1.23", "major");
  t.is(result, "3.0.0.0.0");
});
test("Increment minor version", (t) => {
  const result = version.up("2.1.1.1.23", "minor");
  t.is(result, "2.2.0.0.0");
});
test("Increment secure version", (t) => {
  const result = version.up("2.1.1.1.23", "secure");
  t.is(result, "2.1.2.1.23");
});
test("Increment crud version", (t) => {
  const result = version.up("2.1.1.1.23", "crud");
  t.is(result, "2.1.1.2.23");
});
test("Increment interface version", (t) => {
  const result = version.up("2.1.1.1.23", "interface");
  t.is(result, "2.1.1.1.24");
});
test("Decrement major version", (t) => {
  const result = version.down("2.1.1.1.23", "major");
  t.is(result, "1.0.0.0.0");
});
test("Decrement minor version", (t) => {
  const result = version.down("2.1.1.1.23", "minor");
  t.is(result, "2.0.0.0.0");
});
test("Decrement secure version", (t) => {
  const result = version.down("2.1.1.1.23", "secure");
  t.is(result, "2.1.0.1.23");
});
test("Decrement crud version", (t) => {
  const result = version.down("2.1.1.1.23", "crud");
  t.is(result, "2.1.1.0.23");
});
test("Decrement interface version", (t) => {
  const result = version.down("2.1.1.1.23", "interface");
  t.is(result, "2.1.1.1.22");
});
