exports.config = {
  user: "ritamg",
  key: "lHWNSA0QECwjeN8DoDb9U6KyXMBgAFXqlIIArkxeOTDSeEdLyG",
  logFile : './logDir/api.log',
  services: [
      ['lambdatest', {
          tunnel: true
      }]
    ],

  updateJob: false,
  specs: ["./tests/specs/single_test._1.js"],
  exclude: [],

  capabilities: [
    {
      browserName: "chrome",
      version: "latest",
      platform: "WIN10",
      name: "webdriverIO-Multiple_test",
      build: "webdriverIO-lambdatest",
      visual: false,
      video: true,
      console: false,
      network: false,
      tunnel:true,
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

exports.config = {
  user: "ritamg",
  key: "lHWNSA0QECwjeN8DoDb9U6KyXMBgAFXqlIIArkxeOTDSeEdLyG",

  updateJob: true,
  exclude: [],

  capabilities: [
    {
      specs: ["./tests/specs/single_test._1.js"],
      browserName: "chrome",
      version: "latest",
      platform: "WIN10",
      name: "webdriverIO-Multiple_test_1",
      build: "webdriverIO-lambdatest_3",
      visual: false,
      video: true,
      console: false,
      network: false,
      tunnel:true,
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

