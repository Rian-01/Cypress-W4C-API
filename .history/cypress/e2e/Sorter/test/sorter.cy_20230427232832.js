import {
  LOGIN_VALID,
  LOGIN_INVALID,
} from "../../../fixtures/sorterCred";
describe("Test Case End To End", () => {
  let token, idTask, idCategory;
  describe("@Positive Case", () => {
    // First Step to get Token
    it("Login Valid", () => {
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
        url: `${Cypress.env("baseUrl")}${Cypress.env("dashboardV2Url")}`,
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
        url: `${Cypress.env("baseUrl")}${Cypress.env("detailTaskUrl")}${idTask}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //List Category
    it("List Category", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("categoryUrl")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
        idCategory = response.body.data[0].id
      });
    });

    //Detail Category
    it("Detail Category", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("detailCategoryUrl")}${idCategory}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    }); 

    //List Waste Type
    it("List Waste Type", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("wasteTypeUrl")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    }); 
    
    //Bank list
    it("Bank List", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}${Cypress.env("bankListUrl")}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    }); 
  });

  //#######################################################################
  describe("@Negative Case", () => {
    const Token="as";
    const id ="12";
    const idCat="12";
    //Invalid Username Password
    it("Login Invalid", () => {
      cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: LOGIN_INVALID,
        setTimeout: 0.1
      }).then((response) => {
        expect(response.status).to.equal(400);
        cy.log(JSON.stringify(response.body));
      });
    });

    //For check profile
    it("Profile", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("profileUrl")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //Dashboard V2
    it("Dashboard V2", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("dashboardV2Url")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //Dashboard V3
    it("Dashboard V3", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("dashboardV3Url")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //List task Sorter
    it("List task User Sorter", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("listTaskUrl")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //Detail task Sorter
    it("Detail task User Sorter", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("detailTaskUrl")}${id}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //List Category
    it("List Category", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("categoryUrl")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    });

    //Detail Category
    it("Detail Category", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("detailCategoryUrl")}${idCat}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    }); 

    //List Waste Type
    it("List Waste Type", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("wasteTypeUrl")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    }); 
    
    //Bank list
    it("Bank List", () => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("bankListUrl")}`,
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response).not.to.be.null
        cy.log(JSON.stringify(response.body));
      });
    }); 
  })
});
