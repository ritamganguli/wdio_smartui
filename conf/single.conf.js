exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user:'shubhamr',
  key:'dl8Y8as59i1YyGZZUeLF897aCFvIDmaKkUU1e6RgBmlgMLIIhh',
  buildName: process.env.LT_BUILD_NAME,
  specs: ["./tests/specs/single_test.js"],
  exclude: [],

  capabilities: [
    {
      "LT:Options": {
      browserName: "chrome",
      version: "latest",
      name: "Test WebdriverIO Single",
      build: "WebDriver Selenium Sample",
      "smartUI.project":"Flipkart12"
    }
    }],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 50000,
  }
};
