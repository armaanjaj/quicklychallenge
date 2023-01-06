import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserlogin = (e) => {
        e.preventDefault();

        let loginData = JSON.stringify({
            email: email,
            password: password,
        });

        axios
            .post("/auth/login", loginData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
                if(response.data.success){
                    alert(response.data.message);
                    localStorage.setItem("jwtToken", JSON.stringify(response.data.token));
                    navigate('/profile');
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.message);
            })
            .finally(() => {
                // alert("Processed!")
            });
    };

    return (
        <>
            <div className="container h-100">
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
                                    className="form-control email"
                                    id="email"
                                    placeholder="example@mail.com"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control password"
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-customized"
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
