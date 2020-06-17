import React from "react";
import faker from "faker";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Cat Facts App", () => {
    it("signs up and renders cat facts", async () => {
        // ARRANGE
        render(<App />);
        const { getByLabelText, getByText, findByText } = screen;

        const firstName = faker.name.firstName();
        // you can get faker values for email and password (ie faker.internet.email())

        // ACT
        const firstNameInput = getByLabelText("First Name");
        // enter email and password

        // get the Sign Up button!

        //ASSERT

        // what would you expect to see if everything works?
        // hint: cat facts don't change between renders
    });
});
