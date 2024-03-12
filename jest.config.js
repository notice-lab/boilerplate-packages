/** @type {import('jest').Config} */

/* import EXTERNAL MODULE */
const config = require("@sprovod/config/jest/server");

/* export CONFIGURATION - with custom config overriding the imported one if the same value is defined twice */
module.exports = { ...config };
