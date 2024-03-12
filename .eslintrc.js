/** @type {import("eslint").Linter.Config} */

/* import EXTERNAL modules */
const config = require("@sprovod/config/eslint/server");

/* export CONFIGURATION - with custom config overriding the imported one if the same value is defined twice */
module.exports = { ...config };
