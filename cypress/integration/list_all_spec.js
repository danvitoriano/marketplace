describe("test list all products", function() {
  context("720p resolution", function() {
    beforeEach(function() {
      cy.viewport(1280, 720);
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
    });
    it("elements should be visible", function() {
      cy.get("#root").should("be.visible");
      cy.get("[data-cy=header]").should("be.visible");
      cy.get(".row").should("be.visible");
      cy.get("[data-cy=card]").should("be.visible");
      cy.screenshot();
    });
  });
  context("iphone-6 resolution", function() {
    beforeEach(function() {
      cy.viewport("iphone-6");
    });

    it("visits marketplace", function() {
      cy.visit("http://localhost:3000");
    });
    it("elements should be visible", function() {
      cy.get("#root").should("be.visible");
      cy.get("[data-cy=header]").should("be.visible");
      cy.get(".row").should("be.visible");
      cy.get("[data-cy=card]").should("be.visible");
      cy.screenshot();
    });
  });
  context("ipad-2 resolution", function() {
    beforeEach(function() {
      cy.viewport("ipad-2");
    });

    it("visits marketplace", function() {
      cy.visit("http://localhost:3000");
    });
    it("elements should be visible", function() {
      cy.get("#root").should("be.visible");
      cy.get("[data-cy=header]").should("be.visible");
      cy.get(".row").should("be.visible");
      cy.get("[data-cy=card]").should("be.visible");
      cy.screenshot();
    });
  });
});
