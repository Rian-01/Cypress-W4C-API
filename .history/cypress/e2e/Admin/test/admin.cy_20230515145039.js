import {
    LOGIN_VALID,
    LOGIN_INVALID
} from "../../../fixtures/adminCred"

describe("Test Case End To End", () => {
    let TokenAdmin, idAdminDone;
    describe("@Positive Case", () => {
    //Login Admin Valid
    it("Login Valid", () => {
        cy.request({
          method: "POST",
          url: `${Cypress.env("baseUrl")}${Cypress.env("loginAdmin")}`,
          headers: {
            "Content-Type": "application/json",
          },
          body: LOGIN_VALID,
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.to.be.null
          cy.log(JSON.stringify(response.body));
          TokenAdmin = response.body.data.token
        });
    });
    //Detail Roles Admin
    it("Detail Roles Admin", () => {
        cy.request({
          method: "GET",
          url: `${Cypress.env("baseUrl")}${Cypress.env("rolesAdmin")}`,
          headers: {
          'Authorization': `Bearer ${TokenAdmin}`
        }
        }).then((response) => {
        //   expect(response.status).to.equal(200);
          expect(response).not.to.be.null
          cy.log(JSON.stringify(response.body));
        })
    });
    //Forgot Password
    it("Forgot Password", () => {
        cy.request({
          method: "POST",
          url: `${Cypress.env("baseUrl")}${Cypress.env("forgotPassword")}`,
        //   body: {
        //     "email": 'test@gmail.com'
        //   }
        }).then((response) => {
          expect(response.status).to.equal(422);
          cy.log(JSON.stringify(response.body));
        })
    });
});
  
  
describe("@Negative Case", () => {
    //Login Collector Invalid
    it("Login Invalid", () => {
        cy.request({
          method: "POST",
          failOnStatusCode: false,
          url: `${Cypress.env("baseUrl")}${Cypress.env("loginAdmin")}`,
          headers: {
            "Content-Type": "application/json",
          },
          body: LOGIN_INVALID,
        }).then((response) => {
          expect(response.status).to.equal(400);
          expect(response).not.to.be.null
          cy.log(JSON.stringify(response.body));
    });
    });
   })
});