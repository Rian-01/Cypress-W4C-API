import {
  LOGIN_VALID,
  LOGIN_INVALID,
  INACTIVE_USER,
  BLANK_PASSWORD,
} from "../../../fixtures/sorterCred";

describe("Login", () => {
  let token,
  beforeEach("Login Sorter [Valid]", () => {
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
      const token = response.token
    })
  });

  it("Profile]", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("baseUrl")}${Cypress.env("profileUrl")}`,
      auth: {
        'Authorization': 'Bearer ' + token
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // expect(response.status).to.equal(400);
      cy.log(JSON.stringify(response.body));
    });
  });

  // it("Login Sorter [Invalid]", () => {
  //   cy.request({
  //     method: "POST",
  //     failOnStatusCode: false,
  //     url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: LOGIN_INVALID,
  //     setTimeout: 0.1
  //   }).then((response) => {
  //     expect(response.status).to.equal(400);
  //     cy.log(JSON.stringify(response.body));
  //   });
  // });

  // it("Login Sorter [Invalid-UnRegistered User]", () => {
  //   cy.request({
  //     method: "POST",
  //     failOnStatusCode: false,
  //     url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: INACTIVE_USER,
  //   }).then((response) => {
  //     expect(response.status).to.equal(400);
  //     cy.log(JSON.stringify(response.body));
  //   });
  // });

  // it("Login Sorter [Invalid-Blank Password]", () => {
  //   cy.request({
  //     method: "POST",
  //     failOnStatusCode: false,
  //     url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: BLANK_PASSWORD,
  //   }).then((response) => {
  //     expect(response.status).to.equal(422);
  //     cy.log(JSON.stringify(response.body));
  //   });
  // });
});
