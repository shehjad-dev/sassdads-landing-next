/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from "theme-ui";
import { useState, useEffect } from "react";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const SubscriptionForm = ({ buttonLabel, ...props }) => {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setId(Date.now());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailReg = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
        //console.log("dsad");
        const notyf = new Notyf({
            duration: 2000,
            dismissible: true,
            position: {
                x: "left",
                y: "bottom",
            },
        });

        //notyf.error("We will contact you soon");

        if (email === "") {
            notyf.error("Please fill out the form");
        } else if (!emailReg.test(email)) {
            notyf.error("Please enter a valid email");
        } else {
            const data = {
                Email: email.toString(),
            };

            axios
                .post(
                    `https://sheetdb.io/api/v1/h1ike8mf3kkaa
            `,
                    {
                        data,
                    }
                )
                .then((response) => {
                    setEmail("");
                    notyf.success("We will contact you soon");
                })
                .catch((err) => {
                    setEmail("");
                    notyf.error("There was an error!");
                });
        }
    };

    return (
        <Flex as="form" sx={styles.form} {...props}>
            <Label htmlFor={`email-${id}`} variant="styles.srOnly">
                Email
            </Label>
            <Input
                type="email"
                id={`email-${id}`}
                placeholder="Enter Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <Button onClick={(e) => handleSubmit(e)}>
                {buttonLabel ?? "Get Started"}
            </Button>
        </Flex>
    );
};

export default SubscriptionForm;

const styles = {
    form: {
        input: {
            flexGrow: 1,
            p: ["0 20px", null, null, null, "0 25px"],
            minHeight: [60],
            height: "auto",
            width: "auto",
        },
        button: {
            ml: [3],
        },
    },
};
