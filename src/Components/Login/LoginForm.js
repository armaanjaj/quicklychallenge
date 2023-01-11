import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator'
import axios from "axios";

const LOGIN_URL = "/auth/login";

function LoginForm() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserlogin = (e) => {
        e.preventDefault();

        if(email === "" || password === "") alert("Email or password cannot be empty");
        else {
            if(!validator.isEmail(email)) alert("The email you entered is not valid")
            else{
                let loginBody = JSON.stringify({email, password,});

                axios
                    .post(LOGIN_URL, loginBody, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then((response) => {
                        if(response.data.success){
                            alert(response.data.message);
                            localStorage.setItem("jwtToken", JSON.stringify(response.data.token));
                            navigate('/profile');
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
            <div className="container h-100" data-testid="login-component">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <form
                            className="form-example"
                            onSubmit={handleUserlogin}
                        >
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@mail.com"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >   
                            Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
