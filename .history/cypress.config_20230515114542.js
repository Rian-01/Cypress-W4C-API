const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    //URL Sorter
    baseUrl: "https://api-dev.waste4change.com",
    loginUrl: "/api/v2/mobile/sorter/login",
    profileUrl: "/api/v2/mobile/sorter/profile",
    dashboardV2Url: "/api/v2/mobile/sorter/dashboard",
    dashboardV3Url: "/api/v3/mobile/sorter/dashboard",
    listTaskUrl: "/api/v2/mobile/sorter/tasks",
    detailTaskUrl: "/api/v2/mobile/sorter/tasks/",
    categoryUrl: "/api/v2/mobile/sorter/waste/category",
    detailCategoryUrl: "/api/v2/mobile/sorter/waste/category/",
    wasteTypeUrl: "/api/v2/mobile/sorter/waste/type",
    bankListUrl: "/api/v2/mobile/sorter/waste-banks",
    //URL Collect
    loginCollectUrl: "/api/v2/mobile/route/login/driver",
    listAllCollectV2: "/api/v2/mobile/collect",
    listAllCollectV3: "/api/v3/mobile/collect",
    listStatusDone: "/api/v3/mobile/collect?status=done",
    listStatusNotYet: "/api/v3/mobile/collect?status=not_yet",
    listStatusInvalid: "/api/v3/mobile/collect?status=asd",
    detailCollectV2: "/api/v2/mobile/collect/detail/",
    detailCollectV3: "/api/v3/mobile/collect/",
    longLate: "?latitude=-6.211544&longitude=106.845172",
    routeList: "/api/v2/mobile/route?page=1&lenght=15",
    trashBagList: "/api/v3/mobile/trasbags",
    //URL Admin
    
  },
});
