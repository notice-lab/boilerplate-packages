/** @type {import('jest').Config} */

/* import EXTERNAL MODULE */
const { server } = require("@sprovod-config/jest-config");

/* export CONFIGURATION - with custom config overriding the imported one if the same value is defined twice */
module.exports = { ...server };
