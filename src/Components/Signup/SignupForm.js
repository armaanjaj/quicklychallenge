import React, { useState } from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SIGNUP_URL = "/auth/signup";

function SignupForm() {
    let navigate = useNavigate();

    // STATES
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [company, setCompany] = useState("");

    // HANDLERS
    const useSignup = (e) => {
        e.preventDefault();

        if (confirmEmail !== email || confirmPassword !== password)
            alert("Emails or passwords doesn't match.");
        else if (password.length < 6)
            alert("Length of password must be 6 or more characters.");
        else {
            if (!validator.isEmail(email))
                alert("The email you entered is not valid");
            else {
                let signupBody = JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    password,
                    company: {
                        name: company,
                    },
                });

                axios
                    .post(SIGNUP_URL, signupBody, {
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
                    .catch((error) => console.log(error));
            }
        }
    };

    return (
        <>
            <div
                className="d-flex flex-column justify-content-center container h-75 mt-5 w-50 border rounded shadow py-5 px-3 mb-5 bg-white"
                data-testid="signup-component"
            >
                <div className="text-center">
                    <span className="fw-bold display-6">Signup</span>
                </div>
                <form
                    className="d-flex flex-column justify-content-center"
                    onSubmit={useSignup}
                >
                    <div className="d-flex flex-row justify-content-evenly align-items-center py-2">
                        <div className="form-group py-1">
                            <label htmlFor="f_name">First Name:</label>
                            <input
                                type="text"
                                className="form-control text-center"
                                placeholder="First Name"
                                name="f_name"
                                onChange={(e) => setfirst_name(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group py-1">
                            <label htmlFor="l_name">Last Name:</label>
                            <input
                                type="text"
                                className="form-control text-center"
                                placeholder="Last Name"
                                name="l_name"
                                onChange={(e) => setlast_name(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly align-items-center py-2">
                        <div className="form-group py-1">
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
                        <div className="form-group py-1">
                            <label htmlFor="confirm_email">Confirm Email:</label>
                            <input
                                type="email"
                                className="form-control text-center"
                                placeholder="Confirm Email"
                                name="confirm_email"
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly align-items-center py-2">
                        <div className="form-group py-1">
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
                        <div className="form-group py-1">
                            <label htmlFor="confirm_password">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                className="form-control text-center"
                                placeholder="Confirm Password"
                                name="confirm_password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        {/* <label htmlFor="email">Company:</label> */}
                        <input
                            type="text"
                            className="form-control text-center w-25 mx-auto"
                            placeholder="Company Name"
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-customized my-2 w- mx-auto"
                    >
                        Signup
                    </button>
                </form>
                <div className="mx-auto">
                    Already have an account? <Link replace to={"/login"}>Login</Link>
                </div>
            </div>
        </>
    );
}

export default SignupForm;
