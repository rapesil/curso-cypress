const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    // define uma url de base para todos os testes
    //baseUrl: 'http://seleniumpractise.blogspot.com',
    // chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
