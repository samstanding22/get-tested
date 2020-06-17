import faker from "faker";

describe("Cat Facts App", () => {
    it("Signs you in and fetches cat facts", () => {
        const firstName = faker.name.firstName();

        // testing-library/cypress doesn't have getBy, use findBy instead 
        cy.findByLabelText("First Name").type(firstName);
    });
});
