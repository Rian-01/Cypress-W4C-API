import {
  LOGIN_VALID,
} from "../../../fixtures/sorterCred";

describe("Test Case End To End", () => {
  describe("Positive Case", () => {
    let token, idTask;
    // First Step to get Token
    beforeEach("Login", () => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: LOGIN_VALID,
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        token = response.body.token
      })
    });

    //For check profile
    it("Profile", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("profileUrl")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });
    
    //Dashboard V2
    it("Dashboard V2", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("dashboardV2Url")}${idTask}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //Dashboard V3
    it("Dashboard V3", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("dashboardV3Url")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //List task Sorter
    it("List task User Sorter", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("listTaskUrl")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
        idTask = response.body.data[0].id
      });
    });

    //Detail task Sorter
    it("Detail task User Sorter", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("detailTaskUrl")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
        idTask = response.body.data[0].id
        cy.log()
      });
    });
  });
});
