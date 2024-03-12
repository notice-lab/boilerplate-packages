/** @type {import('semantic-release').GlobalConfig} */

/* import EXTERNAL modules */
const config = require("@sprovod/config/semantic-release");

/* export CONFIGURATION - with custom config overriding the imported one if the same value is defined twice */
module.exports = { ...config };
