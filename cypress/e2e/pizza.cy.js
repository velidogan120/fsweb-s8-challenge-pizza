describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("inputa bir metin giren test", () => {
    cy.get('[data-cy="name-input"]').type("Veli").should("have.value", "Veli");
  });

  it("birden fazla malzeme seçilebilen test", () => {
    cy.get('[data-cy="extra-Pepperoni"]').check();
    cy.get('[data-cy="extra-Mısır"]').check();
    cy.get('[data-cy="extra-Jalepeno"]').check();
    cy.get('[data-cy="extra-Ananas"]').check();

    cy.get('[data-cy^="extra-"]:checked').should("have.length.at.least", 4);
  });
  it("formu gönderen test", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: {
        id: "123",
        createdAt: "2026-02-11T20:00:00Z",
      },
    }).as("postOrder");

    cy.get('[data-cy="name-input"]').type("Veli");

    cy.get('input[type="radio"][value="S"]').check();

    cy.get("select").select("İnce");

    cy.get('[data-cy="extra-Pepperoni"]').check();
    cy.get('[data-cy="extra-Mısır"]').check();
    cy.get('[data-cy="extra-Jalepeno"]').check();
    cy.get('[data-cy="extra-Ananas"]').check();

    cy.get('[data-cy="submit-button"]').should("not.be.disabled").click();

    cy.wait("@postOrder");
    cy.url().should("include", "/order-completed");
  });
});
