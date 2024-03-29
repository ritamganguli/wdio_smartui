const fs = require('fs');

exports.config = {
  user: "ritamg",
  key: "lHWNSA0QECwjeN8DoDb9U6KyXMBgAFXqlIIArkxeOTDSeEdLyG",

  updateJob: false,
  specs: ["./tests/specs/single_test._1.js"],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: "webdriverIO-parallel_test",
    build: "webdriverIO-lambdatest",
    visual: false,
    video: true,
    console: false,
    network: false,
  },

  capabilities: [
    {
      browserName: "chrome",
      version: "latest",
      platform: "WIN10",
    },
    {
      browserName: "firefox",
      version: "latest",
      platform: "WIN7",
    },
    {
      browserName: "internet explorer",
      version: "latest",
      platform: "WIN10",
    },
    {
      browserName: "MicrosoftEdge",
      version: "latest",
      platform: "WIN10",
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

// Function to assign common capabilities
function assignCommonCapabilities(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
}

// Function to execute a single test case with a delay
function executeTestCaseWithDelay(caps) {
  return new Promise((resolve) => {
    assignCommonCapabilities(caps); // Assign common capabilities

    // Execute the test case
    console.log(`Executing test case for capability: ${caps.browserName}`);
    // Replace the following line with your actual test case execution code
    // e.g., runTestCase(caps);

    setTimeout(resolve, 80000); // Wait for 30 seconds between test cases
  });
}

// Main function to execute test cases sequentially
async function executeSequentially(capabilities) {
  if (capabilities.length === 0) {
    return; // Base case: when there are no more test cases to execute
  }

  const [currentCapability, ...remainingCapabilities] = capabilities;
  await executeTestCaseWithDelay(currentCapability);

  // Recursively call the function with the remaining test cases
  await executeSequentially(remainingCapabilities);
}

(async () => {
  // Start the sequential execution of test cases
  await executeSequentially(exports.config.capabilities);
})();
