import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dimmer, Form, Message, Header, Loader, Container } from "semantic-ui-react";

const Signup = ({ setUser }) => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const handleSubmit = () => {
        const errorArray = [];
        const validEmailRegex = /\S+@\S+\.\S+/;
        !validEmailRegex.test(email) && errorArray.push("Invalid email address");
        password.length < 8 && errorArray.push("Password must be longer than 8 characters");
        (password === email || password === firstName) && errorArray.push("Password cannot be the same as your email or first name");
        passwordConfirm !== password && errorArray.push("Passwords must match");
        if (errorArray.length) {
            setErrors(errorArray);
            return;
        }

        setUser({
            firstName,
            email,
        });
        setLoading(true);
        // simulating an AJAX call
        setTimeout(() => {
            history.push("/welcome");
        }, 500);
    };

    return (
        <Container style={{ marginTop: "4em", width: "30%" }}>
            <Dimmer.Dimmable blurring={loading}>
                <Header
                    as="h2"
                    textAlign="center"
                    content="Let's Sign Up"
                    subheader="Use the form below to sign up for this super awesome service. You’re only a few steps away!"
                />
                <Form onSubmit={handleSubmit} error={errors.length > 0} data-testid="form" warning={errors.length === 0}>
                    <Message error header="Please address the following errors" list={errors} />
                    <Message
                        warning
                        list={[
                            "Password needs to be longer than 8 characters",
                            "Password should not match your first name or email address",
                        ]}
                    />
                    <Form.Input
                        label="First Name"
                        value={firstName}
                        onChange={(_e, { value }) => setFirstName(value)}
                        placeholder="Your First Name"
                        required
                        data-testid="firstname"
                        id="firstname"
                    />
                    <Form.Input
                        label="Email Address"
                        value={email}
                        onChange={(_e, { value }) => setEmail(value)}
                        placeholder="Your Email Address"
                        required
                        data-testid="email"
                        id="email"
                    />
                    <Form.Input
                        label="Password"
                        type="password"
                        data-testid="password"
                        value={password}
                        onChange={(_e, { value }) => setPassword(value)}
                        placeholder="Your Password"
                        required
                        id="password"
                    />
                    <Form.Input
                        label="Confirm Password"
                        type="password"
                        data-testid="passwordconfirm"
                        value={passwordConfirm}
                        onChange={(_e, { value }) => setPasswordConfirm(value)}
                        placeholder="Retype password"
                        required
                        id="confirm"
                    />
                    <div className="button-container">
                        <Form.Button type="submit" color="orange" floated="right" data-testid="submit">
                            Sign Up
                        </Form.Button>
                    </div>
                </Form>
                <Dimmer active={loading}>
                    <Loader>Saving Signup Data</Loader>
                </Dimmer>
            </Dimmer.Dimmable>
        </Container>
    );
};

export default Signup;
