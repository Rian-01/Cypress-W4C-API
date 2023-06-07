const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseUrl: "https://api-dev.waste4change.com",
    loginUrl: "/api/v2/mobile/sorter/login",
    profileUrl: "/api/v2/mobile/sorter/profile",
    dashboardUrl: "/api/v2/mobile/sorter/dashboard",
    listTaskUrl: "/api/v2/mobile/sorter/tasks",
    
  },
});
