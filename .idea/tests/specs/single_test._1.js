var assert = require('assert');

global.pageText = '';

describe('Lambdatest Demo Test', function() {
  it('Lambdatest Demo TestCase', async function () {
    for (var j = 0; j < 2; j++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Test logic
      await browser.url('https://www.lambdatest.com/blog/');
      const heading = await browser.$('h1');
      const headingValue = await heading.getText();
      console.log('Heading-Ritam:', headingValue);
      global.pageText = headingValue;
      module.exports.headingValue = headingValue;
    }
  });
});


module.exports = {pageText};



