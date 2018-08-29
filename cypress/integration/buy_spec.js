describe("test buy one product", function() {
  context("720p resolution", function() {
    beforeEach(function() {
      cy.viewport(1280, 720);
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.wait(2000);
    });
    it("elements should be visible", function() {
      cy.get("#root").should("be.visible");
      cy.get("[data-cy=header]").should("be.visible");
      cy.get(".row").should("be.visible");
      cy.get("[data-cy=card]").should("be.visible");
      cy.screenshot();
    });
    it("get product id 17762", function() {
      cy.get("[data-cy=17662]").click();
      cy.url().should("include", "17662");
      cy.get(".row").should("not.be.visible");
      cy.contains("Comprar");
    });
    it("buy product id 17762", function() {
      cy.contains("Comprar");
      cy.wait(2000);
      cy.get("[data-cy=buy-button]").click();
    });
    it("show transaction receipt", function() {
      cy.wait(2000);
      cy.get(".transaction").should("be.visible");
      cy.contains("Transaction ID");
      cy.contains("555.00");
      cy.contains("231.25");
      cy.contains("138.75");
      cy.screenshot();
    });
    it("back to home", function() {
      cy.get("[data-cy=back]")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.url().should("not.include", "17662");
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
  context("iphone-6 resolution", function() {
    beforeEach(function() {
      cy.viewport("iphone-6");
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.wait(2000);
    });
    it("elements should be visible", function() {
      cy.get("#root").should("be.visible");
      cy.get("[data-cy=header]").should("be.visible");
      cy.get(".row").should("be.visible");
      cy.get("[data-cy=card]").should("be.visible");
      cy.screenshot();
    });
    it("get product id 17762", function() {
      cy.get("[data-cy=17662]").click();
      cy.url().should("include", "17662");
      cy.get(".row").should("not.be.visible");
      cy.contains("Comprar");
    });
    it("buy product id 17762", function() {
      cy.contains("Comprar");
      cy.wait(2000);
      cy.get("[data-cy=buy-button]").click();
    });
    it("show transaction receipt", function() {
      cy.wait(2000);
      cy.get(".transaction").should("be.visible");
      cy.contains("Transaction ID");
      cy.contains("555.00");
      cy.contains("231.25");
      cy.contains("138.75");
    });
    it("back to home", function() {
      cy.get("[data-cy=back]")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.url().should("not.include", "17662");
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
  context("ipad-2 resolution", function() {
    beforeEach(function() {
      cy.viewport("ipad-2");
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.wait(2000);
    });
    it("elements should be visible", function() {
      cy.get("#root").should("be.visible");
      cy.get("[data-cy=header]").should("be.visible");
      cy.get(".row").should("be.visible");
      cy.get("[data-cy=card]").should("be.visible");
      cy.screenshot();
    });
    it("get product id 17762", function() {
      cy.get("[data-cy=17662]").click();
      cy.url().should("include", "17662");
      cy.get(".row").should("not.be.visible");
      cy.contains("Comprar");
    });
    it("buy product id 17762", function() {
      cy.contains("Comprar");
      cy.wait(2000);
      cy.get("[data-cy=buy-button]").click();
    });
    it("show transaction receipt", function() {
      cy.wait(2000);
      cy.get(".transaction").should("be.visible");
      cy.contains("Transaction ID");
      cy.contains("555.00");
      cy.contains("231.25");
      cy.contains("138.75");
    });
    it("back to home", function() {
      cy.get("[data-cy=back]")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.url().should("not.include", "17662");
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
});
