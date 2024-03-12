/** @type {import("prettier").Config} */

/* import EXTERNAL modules */
const config = require("@sprovod/config/prettier");

/* export CONFIGURATION - with custom config overriding the imported one if the same value is defined twice */
module.exports = { ...config };
