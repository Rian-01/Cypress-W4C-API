const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseUrl: "https://api-dev.waste4change.com",
    // loginUrl: "/api/v2/mobile/sorter/login",
    // profileUrl: "/api/v2/mobile/sorter/profile",
    // dashboardV2Url: "/api/v2/mobile/sorter/dashboard",
    // dashboardV3Url: "/api/v3/mobile/sorter/dashboard",
    // listTaskUrl: "/api/v2/mobile/sorter/tasks",
    // detailTaskUrl: "/api/v2/mobile/sorter/tasks/",
    // categoryUrl: "/api/v2/mobile/sorter/waste/category",
    // detailCategoryUrl: "/api/v2/mobile/sorter/waste/category/",
    // wasteTypeUrl: "/api/v2/mobile/sorter/waste/type",
    // bankListUrl: "/api/v2/mobile/sorter/waste-banks",
    loginCollectUrl: "/api/v2/mobile/route/login/driver",
  },
});
