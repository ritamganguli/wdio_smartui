exports.config = {
  user: "shubhamr",
  key: "dl8Y8as59i1YyGZZUeLF897aCFvIDmaKkUU1e6RgBmlgMLIIhh",

  updateJob: false,
  specs: ["./tests/specs/local_test.js"],
  exclude: [],

  capabilities: [
    {
      browserName: "chrome",
      version: "65.0",
      platform: "WIN10",
      name: "webdriverIO-local_test",
      build: "webdriverIO-lambdatest",
      visual: true,
      video: true,
      console: true,
      network: true,
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
