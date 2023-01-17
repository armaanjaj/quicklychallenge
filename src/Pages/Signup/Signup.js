import React, { useState }  from "react";
import validator from "validator";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import SignupForm from "../../Components/Signup/SignupForm";

const SIGNUP_URL = "/auth/signup";

function Signup() {
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
    const handleUserSignup = (e) => {
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
        <div>
            <SignupForm
                handleFirstNameChange={(e) => setfirst_name(e.target.value)}
                handleLastNameChange={(e) => setlast_name(e.target.value)}
                handleEmailChange={(e) => setEmail(e.target.value)}
                handleConfirmEmailChange={(e) => setConfirmEmail(e.target.value)}
                handlePasswordChange={(e) => setPassword(e.target.value)}
                handleConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
                handleCompanyChange={(e) => setCompany(e.target.value)}
                handleSubmit={handleUserSignup}
            />
        </div>
    );
}

export default Signup;
