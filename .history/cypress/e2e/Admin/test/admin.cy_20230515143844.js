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
          TokenAdmin = response.data.token
        });
    });
    //Detail Roles Admin
    it("Detail Roles Admin", () => {
        cy.request({
          method: "GET",
          url: `${Cypress.env("baseUrl")}${Cypress.env("rolesAdmin")}`,
          headers: {
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS1zdGFnaW5nLndhc3RlNGNoYW5nZS5jb20vYXBpL3YyL2F1dGgvbG9naW4iLCJpYXQiOjE2ODQxMzYwMTcsImV4cCI6MTY4NjcyODAxNywibmJmIjoxNjg0MTM2MDE3LCJqdGkiOiJnUXVSRzVxQnRFclJBbWNuIiwic3ViIjoiOTRkYWQ4OTItNTRmYS00N2M2LTkwMjktOTc0ZTQ0NzA0ZjBkIiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.FHRUTzIEjI-vg3p7CVsLGPzxliyrohpyASYTbuKgugg`
        }
        }).then((response) => {
        //   expect(response.status).to.equal(200);
          expect(response).not.to.be.null
          cy.log(JSON.stringify(response.body));
        })
    });
    //List All Collect V2
    // it("List All Collect V2", () => {
    //             cy.request({
    //       method: "GET",
    //       url: `${Cypress.env("baseUrl")}${Cypress.env("listAllCollectV2")}`
    //     }).then((response) => {
    //       expect(response.status).to.equal(200);
    //       cy.log(JSON.stringify(response.body));
    //     })
    // });
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