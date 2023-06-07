import {
  LOGIN_VALID,
  LOGIN_INVALID,
  INACTIVE_USER,
  BLANK_PASSWORD,
} from "../../../fixtures/sorterCred";

describe("Test Case End To End", () => {
  describe("Positive Case", () => {
    let token;
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
        cy.log(JSON.stringify(response.body));
      });
    });
    
  });
});
