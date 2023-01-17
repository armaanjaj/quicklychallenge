import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import LoginForm from "../../Components/Login/LoginForm";

const LOGIN_URL = "/auth/login";

function Login() {
    let navigate = useNavigate();

    // STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // HANDLERS
    const handleUserlogin = (e) => {
        e.preventDefault();

        if (email === "" || password === "")
            alert("Email or password cannot be empty");
        else {
            if (!validator.isEmail(email))
                alert("The email you entered is not valid");
            else {
                let loginBody = JSON.stringify({ email, password });

                axios
                    .post(LOGIN_URL, loginBody, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then((response) => {
                        if (response.data.success) {
                            alert(response.data.message);
                            localStorage.setItem(
                                "jwtToken",
                                JSON.stringify(response.data.token)
                            );
                            navigate("/profile");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    };

    return (
        <div>
            <LoginForm
                handleEmailChange={(e) => setEmail(e.target.value)}
                handlePasswordChange={(e) => setPassword(e.target.value)}
                handleSubmit={handleUserlogin}
            />
        </div>
    );
}

export default Login;
