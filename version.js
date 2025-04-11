/*!
 * @author myax <mig_dj@hotmail.com>
 * date 10/26/2018
 * implement pa-dss version tag
 */

const tagRegex = /\d+\.\d+\.\d+\.\d+\.\d+/;

/**
 * @param {String} tag  `''` tag version to parse
 * @returns {object} version
 */
const parse = (tag) => {
  if (typeof tag == "string" && tagRegex.test(tag.trim())) {
    const tagElements = tag.split(".");
    return {
      major: parseInt(tagElements[0]),
      minor: parseInt(tagElements[1]),
      secure: parseInt(tagElements[2]),
      crud: parseInt(tagElements[3]),
      interface: parseInt(tagElements[4]),
    }
  } else {
    throw new Error('Invalid version format.')
  }
}

/**
   * change tag version
   * @param {Number} tag  `` tag version
   * @param {String} mode  `` change mode ['major', 'minor', 'secure', 'crud', 'interface']
   * @param {Boolean} inc  `false` increase or decrease tag version
   */
const change = (tag, mode, inc) => {
  let {
    major,
    minor,
    secure,
    crud,
    interface
  } = parse(tag);
  const add = inc ? 1 : -1;
  switch (mode) {
    case "major":
      {
        major += add;
        minor = 0;
        secure = 0;
        crud = 0;
        interface = 0;
      }
      break;
    case "minor":
      {
        minor += add;
        secure = 0;
        crud = 0;
        interface = 0;
      }
      break;
    case "secure":
      {
        secure += add;
      }
      break;
    case "crud":
      {
        crud += add;
      }
      break;
    case "interface":
      {
        interface += add;
      }
      break;
  }

  return `${major}.${minor}.${secure}.${crud}.${interface}`;
}

/**
 * increase tag version
 * @param {Number} tag  `` tag version
 * @param {String} mode  `` change mode
 */
const up = (tag, mode) => {
  return change(tag, mode, true);
}

/**
 * decrease tag version
 * @param {Number} tag  `` tag version
 * @param {String} mode  `` change mode
 */
const down = (tag, mode) => {
  return change(tag, mode, false);
}

module.exports = {
  up,
  down
};
