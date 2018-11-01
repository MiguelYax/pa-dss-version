# pa-dss-version

Payment Application Data Security Standard - Version Tag

More information about [PA DSS](https://www.pcisecuritystandards.org/)

# Install

```
npm install pa-dss-version --save
```

# Usage

```js
const version = require('pa-dss-version');

//increase tag version

version.up('1.0.1.1.20', 'major'); // 2.0.0.0.0
version.up('5.0.1.1.0', 'minor'); // 5.1.0.0.0
version.up('7.0.1.1.0', 'secure'); // 7.0.2.1.0
version.up('4.0.1.1.0', 'crud'); // 4.0.1.2.0
version.up('3.0.1.1.14', 'innerface'); // 3.0.1.1.15

//decrement tag version

version.down('3.0.1.1.20', 'major'); // 2.0.0.0.0
version.down('5.1.1.1.0', 'minor'); // 5.0.0.0.0
version.down('7.0.1.1.0', 'secure'); // 7.0.0.1.0
version.down('4.0.1.1.0', 'crud'); // 4.0.1.0.0
version.down('3.0.1.1.14', 'innerface'); // 3.0.1.1.13
```

# Contribution

Something Missing?
If you have ideas for more “How To” recipes that should be on this page, let us know or contribute some! :D

# Test

using mocha and chai to check methods

```
npm test
```

Result:

```
  PA DSS Version - Testing...
    Increment version
      √ Check major version
      √ Check minor version
      √ Check secure version
      √ Check crud version
      √ Check innerface version
    Decrement version
      √ Check major version
      √ Check minor version
      √ Check secure version
      √ Check crud version
      √ Check innerface version


  10 passing (14ms)
```
