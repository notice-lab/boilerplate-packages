/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@sprovod-config/eslint-config/headers.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true
    }
};
