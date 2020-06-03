exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
    browserName : 'chrome',
      chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ['--no-sandbox']
    },
    marionette : true,
    acceptInsecureCerts : true
}
};