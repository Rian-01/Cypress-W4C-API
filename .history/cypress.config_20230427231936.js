const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseUrl: "https://api-dev.waste4change.com",
    loginSorter: "/api/v2/mobile/sorter/login",
    profileSorter: "/api/v2/mobile/sorter/profile",
    dashboardV2Sorter: "/api/v2/mobile/sorter/dashboard",
    dashboardV3Sorter: "/api/v3/mobile/sorter/dashboard",
    listTaskSorter: "/api/v2/mobile/sorter/tasks",
    detailTaskSorter: "/api/v2/mobile/sorter/tasks/",
    categorySorter: "/api/v2/mobile/sorter/waste/category",
    detailCategorySorter: "/api/v2/mobile/sorter/waste/category/",
    wasteTypeSorter: "/api/v2/mobile/sorter/waste/type",
    bankListSorter: "/api/v2/mobile/sorter/waste-banks",
    loginCollect: "/api/v2/mobile/route/login/driver",
  },
});
