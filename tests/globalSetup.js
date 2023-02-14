const path = require("path");
const cli = require("next/dist/cli/next-build");
const fs = require("fs");

async function globalSetup() {
  if (process.env.SKIP_BUILD === "1") {
    console.log("skipping build as SKIP_BUILD is set");
  } else {
    await cli.nextBuild([path.join(__dirname, "..")]);
  }
}

module.exports = globalSetup;
