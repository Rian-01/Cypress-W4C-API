import {
  LOGIN_VALID,
  LOGIN_INVALID,

} from "../../../fixtures/collectorCred";
describe("Test Case End To End", () => {
  let TokenCollect;
  describe("@Positive Case", () => {
    //Login Collector Valid
    it("Login Valid", () => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("baseUrl")}${Cypress.env("loginCollectUrl")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: LOGIN_VALID,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
        TokenCollect=response.body.token

      });
    });

    //List All Collect V2
    it("List All Collect V2", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("listAllCollectV2")}`
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
      })
    });

    //List All Collect V3
    it("List All Collect V3", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("listAllCollectV3")}`
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
      })
    });

    //Status All Collector Done
    it("Status All Collector Done", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("listStatusDone")}`
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        expect(response.body.data[0].status).to.equal("donE");})
    });

    //Status All Collector Not Yet
    it("Status All Collector Not Yet", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("listStatusNotYet")}`
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        expect(response.body.data[0].status).to.equal("not_yet");
      })
    });
  });
  describe("@Negative Case", () => {
    //Login Collector Invalid
    it("Login Invalid", () => {
      cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("loginCollectUrl")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: LOGIN_INVALID,
      }).then((response) => {
        expect(response.status).to.equal(404);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });
  })
});

