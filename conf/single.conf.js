
// exports.config = {
//   services: [
//     [
//       "lambdatest",
//       {
//         tunnel: false,
//         lambdatestOpts: {
//           logFile: "tunnel.log"
//         }
//       }
//     ]
//   ],
//   user: 'shubhamr',
//   key:'dl8Y8as59i1YyGZZUeLF897aCFvIDmaKkUU1e6RgBmlgMLIIhh',
//   buildName: "Screenshot_Test",
//   specs: ["./tests/specs/single_test.js"],
//   exclude: [],

//   capabilities: [
//     {

// 			browserName: 'chrome',
// 			"lt:options": {
// 				platformName: "Android",
// 				deviceName: "Pixel 6",
// 				name: "android_ltOptions_w3c",
// 				deviceOrientation: "portrait",
// 				isRealMobile: true,
// 				w3c: true,
// 				fullPage: true
// 			}
// 		}
// 	],
// 	services: [
// 		[
// 			'image-comparison',
// 			{
// 				screenshotPath: './images',
// 				fullPageScrollTimeout: 750,
// 				hideScrollbar: true,
// 				blockOutStatusBar: true,
// 				blockOutToolBar: true,
// 				disableCSSAnimation: true,
// 				blockOutSideBar: true
// 			},
// 		],
// 	],
//   logLevel: "info",
//   coloredLogs: true,
//   screenshotPath: "./errorShots/",
//   waitforTimeout: 100000,
//   connectionRetryTimeout: 90000,
//   connectionRetryCount: 1,
//   path: "/wd/hub",
//   hostname: "mobile-hub.lambdatest.com",
//   port: 80,
//   framework: "mocha",
//   mochaOpts: {
//     ui: "bdd",
//     timeout: 500000,
//   }
// };


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
