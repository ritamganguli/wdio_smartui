// runSequentialTests.js
const { config } = require("./single.conf.js");

// Function to run tests sequentially
async function runSequentialTests() {
  const webdriverio = require("webdriverio");
  const clients = [];

  for (const capability of config.capabilities) {
    // Create a new client for each capability
    const client = await webdriverio.remote(capability);
    clients.push(client);
  }

  // Run tests for each client sequentially
  for (const client of clients) {
    await client.init();
    await client.url(config.baseUrl); // Optional: Navigate to a specific URL before running the tests
    await client.execute(config.before); // Optional: Run setup actions before tests
    await client.execute("mocha.run()"); // Start the Mocha test execution
    await client.execute(config.after); // Optional: Run cleanup actions after tests
    await client.deleteSession(); // Close the browser session
  }
}

// Run the tests sequentially
runSequentialTests();