/*!
 * @author myax <mig_dj@hotmail.com>
 * date 10/26/2018
 * implement pa-dss version tag
 */
class Tag {
  constructor() {
    this._tagRegex = /\d+\.\d+\.\d+\.\d+\.\d+/;
    this._major = 0;
    this._minor = 0;
    this._security = 0;
    this._crud = 0;
    this._inerface = 0;
  }
  parse(tag) {
    if (typeof tag == "string" && this._tagRegex.test(tag.trim())) {
      let tagElements = tag.split(".");
      this._major = parseInt(tagElements[0]);
      this._minor = parseInt(tagElements[1]);
      this._security = parseInt(tagElements[2]);
      this._crud = parseInt(tagElements[3]);
      this._inerface = parseInt(tagElements[4]);
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
  change(tag, mode) {
    this.parse(tag);
    switch (mode) {
      case "major":
        {
          this._major += 1;
          this._minor = 0;
          this._security = 0;
          this._crud = 0;
          this._inerface = 0;
        }
        break;
      case "minor":
        {
          this._minor += 1;
          this._security = 0;
          this._crud = 0;
          this._inerface = 0;
        }
        break;
      case "secure":
        {
          this._security += 1;
        }
        break;
      case "crud":
        {
          this._crud += 1;
        }
        break;
      case "innerface":
        {
          this._inerface += 1;
        }
        break;
      default:
        break;
    }
    return [
      this._major,
      this._minor,
      this._security,
      this._crud,
      this._inerface
    ].join(".");
  }
}

// export default Tag;
module.exports = Tag;
