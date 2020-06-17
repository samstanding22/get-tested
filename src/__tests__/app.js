import React from "react";
import faker from "faker";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe.skip("Cat Facts App", () => {
    it("signs up and renders cat facts", async () => {
        render(<App />);
        const { getByLabelText, getByText } = screen;

        const firstName = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        const firstNameInput = getByLabelText("First Name");
        const emailInput = getByLabelText("Email Address");
        const passwordInput = getByLabelText("Password");
        const passwordConfirmInput = getByLabelText("Confirm Password");

        fireEvent.change(firstNameInput, { target: { value: firstName } });
        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(passwordInput, { target: { value: password } });
        fireEvent.change(passwordConfirmInput, { target: { value: password } });

        expect(firstNameInput).toHaveValue(firstName);
        expect(emailInput).toHaveValue(email);
        expect(passwordInput).toHaveValue(password);
        expect(passwordConfirmInput).toHaveValue(password);

        fireEvent.click(getByText("Sign Up"));

        const catFact = await screen.findByText("The oldest cat video on YouTube dates back to 1894.");

        expect(catFact).toBeInTheDocument();
    });
});
