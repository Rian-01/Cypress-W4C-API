import {
    LOGIN_VALID,
    LOGIN_INVALID
} from "../../../fixtures/adminCred"

describe("Test Case End To End", () => {
    let TokenAdmin, idArea;
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
          expect(response.status).to.equal(200);
          expect(response).not.to.be.null
          cy.log(JSON.stringify(response.body));
        })
    });
    //Forgot Password
    it("Forgot Password", () => {
        cy.request({
          method: "POST",
          failOnStatusCode: false,
          url: `${Cypress.env("baseUrl")}${Cypress.env("forgotPassword")}`,
        //   body: {
        //     "email": 'test@gmail.com'
        //   }
        }).then((response) => {
          expect(response.status).to.equal(422);
          cy.log(JSON.stringify(response.body));
        })
    });

    //Find All Areas
    it("Find all area", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("baseUrl")}${Cypress.env("allArea")}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body))
            idArea = response.body.data[1].id
        })
    })

    //Detail Area
    it("Detail Area", () => {
        cy.request({
            method: "GET",
            url:`${Cypress.env("baseUrl")}${Cypress.env("detailArea")}${idArea}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
    });

    //List  Service Categories
    it("List  Service Categories", () => {
      cy.request({
          method: "GET",
          url:`${Cypress.env("baseUrl")}${Cypress.env("listServiceCategory")}`
      }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.to.be.null
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
     //Detail Roles Admin
    it("Detail Roles Admin", () => {
        cy.request({
          method: "GET",
          url: `${Cypress.env("baseUrl")}${Cypress.env("rolesAdmin")}`,
          headers: {
          'Authorization': `Bearer ${TokenAdmins}`
        }
        }).then((response) => {
          expect(response.status).to.equal(401);
          expect(response).not.to.be.null
          expect(response.body.message).to.equal("Token is Invalid");
          cy.log(JSON.stringify(response.body));
        })
    });
    //Forgot Password
    it("Forgot Password", () => {
        cy.request({
          method: "POST",
          failOnStatusCode: false,
          url: `${Cypress.env("baseUrl")}${Cypress.env("forgotPassword")}`,
        //   body: {
        //     "email": 'test@gmail.com'
        //   }
        }).then((response) => {
          expect(response.status).to.equal(422);
          cy.log(JSON.stringify(response.body));
        })
    });

    //Find All Areas
    it("Find all area", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("baseUrl")}/api/v2/area`
        }).then((response) => {
            expect(response.status).to.equal(404);
            cy.log(JSON.stringify(response.body))
            idArea = response.body.data[0].id
        })
    })

    //Detail Area
    it("Detail Area", () => {
        cy.request({
            method: "GET",
            url:`${Cypress.env("baseUrl")}${Cypress.env("detailArea")}${idArea}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
    });

    //List  Service Categories
    it("List  Service Categories", () => {
      cy.request({
          method: "GET",
          url:`${Cypress.env("baseUrl")}${Cypress.env("listServiceCategory")}`
      }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.to.be.null
          cy.log(JSON.stringify(response.body));
      })
  }); 
   })
});