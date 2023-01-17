import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

const LOGIN_URL = "/auth/login";

function LoginForm() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        <>
            <div
                className="d-flex flex-column justify-content-center container h-75 mt-5 w-25 border rounded shadow py-5 px-3 mb-5 bg-white"
                data-testid="login-component"
            >
                <div className="text-center">
                    <span className="fw-bold display-6">Login</span>
                </div>
                <form className="d-flex flex-column justify-content-center" onSubmit={handleUserlogin}>
                    <div className="form-group py-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control text-center"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group py-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control text-center"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">
                        Login
                    </button>
                </form>
                <div className="mx-auto">
                    New here? <Link replace to={"/signup"}>Signup</Link>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
