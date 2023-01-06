import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");

    const handleUserSignup = (e) => {
        e.preventDefault();

        let signupData = JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            company: {
                name : company
            }
        });

        axios
            .post("/auth/signup", signupData, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(response => {
                if(response.data.success){
                    alert(response.data.message);
                    localStorage.setItem("jwtToken", JSON.stringify(response.data.token));
                    navigate('/profile');
                }
            })
            .catch(error => {
                console.log(error)
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
                        <form className="form-example" onSubmit={handleUserSignup}>
                            <div className="form-group">
                                <label htmlFor="f_name">First Name:</label>
                                <input
                                    type="text"
                                    className="form-control name"
                                    id="f_name"
                                    placeholder="First Name"
                                    name="f_name"
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="l_name">Last Name:</label>
                                <input
                                    type="text"
                                    className="form-control name"
                                    id="l_name"
                                    placeholder="Last Name"
                                    name="l_name"
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
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
                            <div className="form-group">
                                <label htmlFor="email">Company:</label>
                                <input
                                    type="text"
                                    className="form-control company"
                                    id="company"
                                    placeholder="Your company"
                                    name="company"
                                    onChange={e => setCompany(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-customized"
                            >
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupForm;
