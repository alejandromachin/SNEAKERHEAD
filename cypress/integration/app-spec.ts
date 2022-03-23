// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("renders the app should find h2 with login", function () {
    cy.get("h1").should("contain", "LOG IN");
  });

  it("should find the 1st input and type machinazo", function () {
    cy.get("input").first().type("machinazo").should("have.value", "machinazo");
  });

  it("should find the 2nd input and type 1234", function () {
    cy.get("input").first().type("1234").should("have.value", "1234");
  });
  it("should find the button input and click", function () {
    cy.contains("LOG IN").click();
  });
});

export {};
