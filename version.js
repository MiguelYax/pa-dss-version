/*!
 * @author myax <mig_dj@hotmail.com>
 * date 10/26/2018
 * implement pa-dss version tag
 */

const tagRegex = /^\d+\.\d+\.\d+\.\d+\.\d+$/;
const MODES = ['major', 'minor', 'secure', 'crud', 'interface'];

/**
 * Parse a version tag string into an object.
 * @param {String} tag e.g. "1.2.3.4.5"
 * @returns {Array} Parsed version
 */
const parse = (tag) => {
  const [major, minor, secure, crud, interface] = getValues(tag);
  return {
    major,
    minor,
    secure,
    crud,
    interface
  };
}

const getValues = (tag) => {
  if (typeof tag === "string" && tagRegex.test(tag.trim())) {
    return tag.split('.').map(Number);
  }
  throw new Error('Invalid version format.');
};

/**
 * Change a version tag by incrementing or decrementing a specific mode.
 * @param {String} tag Version tag
 * @param {String} mode One of ['major', 'minor', 'secure', 'crud', 'interface']
 * @param {Number} inc  Value to increment or decrement
 * @returns {String} New version tag
 */
const change = (tag, mode, inc) => {
  if (!MODES.includes(mode)) throw new Error('Invalid mode.');
  const values = getValues(tag);
  const idx = MODES.indexOf(mode);
  values[idx] += inc;
  if (idx <= 1) {
    for (let i = idx + 1; i < values.length; i++) {
      values[i] = 0
    };
  }
  return values.join('.');
};

/**
 * Increase tag version
 * @param {String} tag Version tag
 * @param {String} mode Change mode
 */
const up = (tag, mode) => change(tag, mode, 1);

/**
 * Decrease tag version
 * @param {String} tag Version tag
 * @param {String} mode Change mode
 */
const down = (tag, mode) => change(tag, mode, -1);

module.exports = { up, down, parse };