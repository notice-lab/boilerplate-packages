/* import EXTERNAL MODULES */
const { execSync } = require("node:child_process");

// List of packages to update
const CONFIG = ["config"].map((name) => `@sprovod/${name}`);

// Create a string of packages to update
const packagesForUpdate = [...CONFIG].join(" ");

try {
    // Execute terminal commands
    execSync(`echo "Updating packages: ${packagesForUpdate}"`, { stdio: "inherit" });
    execSync(`npm update ${packagesForUpdate}`, { stdio: "inherit" });
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
