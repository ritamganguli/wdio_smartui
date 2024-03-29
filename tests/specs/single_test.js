const assert = require('assert');

describe('Google Search Function', () => {
  it('can find search results', async () => {
    await browser.url('https://www.flipkart.com/');
    await browser.pause('15000'); // consent popup is coming for other location which needs to be accepted to proceed
    let config = {
      screenshotName: "Select-ID",
      fullPage: false, //You can make this property as true in case of Chrome browser
      // ignoreDOM: {
      //   xpath: ["/html/body/div[1]/div/div[1]/div/div/div/div/div[1]/div/div[1]/div/div[2]/div[1]/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div"], // Ignoring elements by ID, you can ignore multiple at once
      // },
      selectDOM: {
        xpath: ["/html/body/div[1]/div/div[1]/div/div/div/div/div[1]/div/div[1]/div/div[2]/div[1]/div/div[2]/div/div/div/div/div/div/div/div[1]"], // Ignoring elements by ID, you can ignore multiple at once
      },
    };
    await browser.execute("smartui.takeScreenshot", config);
    await browser.pause('5000');

  });
});