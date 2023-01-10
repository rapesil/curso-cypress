const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    // define uma url de base para todos os testes
    //baseUrl: 'http://seleniumpractise.blogspot.com',



    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 2,
      openMode: 0,
    },
    video: false
  },
});
