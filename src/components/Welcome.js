import React, { useEffect, useState } from "react";
import { Header, Divider, Button, Container } from "semantic-ui-react";
import axios from "axios";

const Welcome = ({ user }) => {
    const [catFacts, setCatFacts] = useState();
    const { firstName } = user;

    useEffect(() => {
        (async () => {
            const facts = await axios.get("https://cat-fact.herokuapp.com/facts");
            setCatFacts(facts.data.all);
        })();
    }, []);

    return (
        <Container style={{ marginTop: "4em", width: "30%" }}>
            <Header as="h2" textAlign="center" content={`Welcome ${firstName}!`} data-testid="firstname" />
            <span>Here are some cat facts: </span>
            <Divider />
            {catFacts && (
                <ul>
                    {catFacts.map((fact) => (
                        <li key={fact._id}>{fact.text}</li>
                    ))}
                </ul>
            )}
            <div className="button-container">
                <Button color="orange" floated="right">
                    Sign In
                </Button>
            </div>
        </Container>
    );
};

export default Welcome;
