import {
    LOGIN_VALID,
    LOGIN_INVALID
} from "../../../fixtures/adminCred"

describe("Test Case End To End", () => {
    let TokenAdmin, idArea;
    describe("@Positive Case", () => {
    //Login Admin Valid
    // it("Login Valid", () => {
    //     cy.request({
    //       method: "POST",
    //       url: `${Cypress.env("baseUrl")}${Cypress.env("loginAdmin")}`,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: LOGIN_VALID,
    //     }).then((response) => {
    //       expect(response.status).to.equal(200);
    //       expect(response).not.to.be.null
    //       cy.log(JSON.stringify(response.body));
    //       TokenAdmin = response.body.data.token
    //     });
    // });
    // //Detail Roles Admin
    // it("Detail Roles Admin", () => {
    //     cy.request({
    //       method: "GET",
    //       url: `${Cypress.env("baseUrl")}${Cypress.env("rolesAdmin")}`,
    //       headers: {
    //       'Authorization': `Bearer ${TokenAdmin}`
    //     }
    //     }).then((response) => {
    //       expect(response.status).to.equal(200);
    //       expect(response).not.to.be.null
    //       cy.log(JSON.stringify(response.body));
    //     })
    // });
    // //Forgot Password
    // it("Forgot Password", () => {
    //     cy.request({
    //       method: "POST",
    //       failOnStatusCode: false,
    //       url: `${Cypress.env("baseUrl")}${Cypress.env("forgotPassword")}`,
    //     //   body: {
    //     //     "email": 'test@gmail.com'
    //     //   }
    //     }).then((response) => {
    //       expect(response.status).to.equal(422);
    //       cy.log(JSON.stringify(response.body));
    //     })
    // });
    
    //Find All Areas
    it("Find All Areas", () => {
        cy.request({
          method: "GET",
          failOnStatusCode: false,
          url: `${Cypress.env("baseUrl")}${Cypress.env("allArea")}`,
        //   body: {
        //     "email": 'test@gmail.com'
        //   }
        }).then((response) => {
          expect(response.status).to.equal(200);
          cy.log(JSON.stringify(response.body));
        })
    });

//     //Detail Area
//     it("Detail Area", () => {
//         cy.request({
//             method: "GET",
//             url:`${Cypress.env("baseUrl")}${Cypress.env("detailArea")}${idArea}`
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             // expect(response.body.data[0].id).to.equal(idArea)
//             cy.log(JSON.stringify(response.body));
//         })
//     });

//     //List  Service Categories
//     it("List  Service Categories", () => {
//       cy.request({
//           method: "GET",
//           url:`${Cypress.env("baseUrl")}${Cypress.env("listServiceCategory")}`
//       }).then((response) => {
//           expect(response.status).to.equal(200);
//           expect(response).not.to.be.null
//           cy.log(JSON.stringify(response.body));
//       })
//   }); 

//   //Show Detail Service Categories
//   it("Show Detail Service Categories", () => {
//     cy.request({
//         method: "GET",
//         url:`${Cypress.env("baseUrl")}${Cypress.env("detailCategory")}`
//     }).then((response) => {
//         expect(response.status).to.equal(200);
//         expect(response).not.to.be.null
//         cy.log(JSON.stringify(response.body));
//     })
//   }); 

//   //List Service
//   it("List Service", () => {
//     cy.request({
//       method: "GET",
//       url: `${Cypress.env("baseUrl")}${Cypress.env("listService")}`,
//       // headers: {
//       //   "Content-Type": "application/json",
//       // },
//       // body: LOGIN_VALID,
//     }).then((response) => {
//       expect(response.status).to.equal(200);
//       expect(response).not.to.be.null
//       cy.log(JSON.stringify(response.body));
//       // TokenAdmin = response.body.data.token
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
     //Detail Roles Admin
    it("Detail Roles Admin", () => {
        cy.request({
          method: "GET",
          failOnStatusCode: false,
          url: `${Cypress.env("baseUrl")}${Cypress.env("rolesAdmin")}`,
          headers: {
          'Authorization': `Bearer as`
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
          // body: {
          //   "email": 'test@gmail.com'
          // }
        }).then((response) => {
          expect(response.status).to.equal(422);
          cy.log(JSON.stringify(response.body));
        })
    });

    //Find All Areas
    it("Find all area", () => {
        cy.request({
            method: "GET",
            failOnStatusCode: false,
            url: `${Cypress.env("baseUrl")}/api/v2/areas`
        }).then((response) => {
            expect(response.status).to.equal(404);
            cy.log(JSON.stringify(response.body))
        })
    })

    //Detail Area
    it("Detail Area", () => {
        cy.request({
            method: "GET",
            failOnStatusCode: false,
            url:`${Cypress.env("baseUrl")}/api/v2/areas`
        }).then((response) => {
            expect(response.status).to.equal(404);
            cy.log(JSON.stringify(response.body));
        })
    });
      //List Category
      it("List Category", () => {
        cy.request({
            method: "GET",
            failOnStatusCode: false,
            url:`${Cypress.env("baseUrl")}/api/v2/service/categorie`
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
    });
   })
});