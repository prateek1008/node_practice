const path = require("path");

/**
 * * process.mainModule.filename is deprecated
 * * this only tells us the path of main module from where our app starts
 */
// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
