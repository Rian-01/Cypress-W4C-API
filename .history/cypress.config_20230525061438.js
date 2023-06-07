const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    //URL Sorter
    // baseUrl: "https://api-dev.waste4change.com",
    baseUrl: "https://api-staging.waste4change.com",
    // baseUrl: "https://api.waste4change.com",
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
    loginAdmin: "/api/v2/auth/login",
    rolesAdmin: "/api/v2/auth/user",
    forgotPassword: "/api/v2/auth/forgot-password",
    allArea: "/api/v2/area",
    detailArea: "/api/v2/area/",
    listServiceCategory: "/api/v2/service/categories",
    detailCategory: "/api/v2/service/categories/0e42e42a-1e3c-4c42-a340-33b65c22b5de",
    listService: "/api/v2/service?status=Active",
    detailService: "/api/v2/service/0fd391a9-e60d-48a5-96c8-a4b5e83bfb3b",
    listServiceStatus: "/api/v2/service?status=Active",
    

  },
});
