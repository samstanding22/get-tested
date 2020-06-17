import faker from "faker";

describe.skip("This finished test", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it("is skipped", () => {
        const firstName = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        cy.findByLabelText("First Name").type(firstName);
        cy.findByLabelText("Email Address").type(email);
        cy.findByLabelText("Password").type(password);
        cy.findByLabelText("Confirm Password").type(password);

        cy.findByText("Sign Up").click();

        cy.findByText(`Welcome ${firstName}!`).should("exist");

        cy.findByText("The oldest cat video on YouTube dates back to 1894.").should("exist");
    });
});
