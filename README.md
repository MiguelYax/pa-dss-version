# pa-dss-version

Payment Application Data Security Standard - Version Tag

# Install

```
npm install pa-dss-version --save
```

# Usage

```
const version = require('pa-dss-version');

version.up('1.0.1.1.20', 'major'); // 2.0.0.0.0
version.up('5.0.1.1.0', 'minor'); // 5.1.0.0.0
version.up('7.0.1.1.0', 'secure'); // 7.0.2.1.0
version.up('4.0.1.1.0', 'crud'); // 4.0.1.2.0
version.up('3.0.1.1.14', 'innerface'); // 3.0.1.1.15
```
