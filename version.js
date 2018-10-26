/*!
 * @author myax <mig_dj@hotmail.com>
 * date 10/26/2018
 * implement pa-dss version tag
 */
class Tag {
  constructor() {
    this._tagRegex = /\d+\.\d+\.\d+\.\d+\.\d+/;
    this.major = 0;
    
  }
  parse(tag) {
    if (typeof tag == "string" && this._tagRegex.test(tag.trim())) {
      let tagElements = tag.split(".");

    } else {
      throw this.error("Invalid tag pattern");
    }
  }
  error(message, code) {
    return {
      message: message,
      code: code
    };
  }
}

module.exports = Tag;
