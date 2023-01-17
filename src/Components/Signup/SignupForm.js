import React from "react";
import {Link} from "react-router-dom";

function SignupForm({
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleConfirmEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleCompanyChange,
    handleSubmit
}) {

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
                    onSubmit={handleSubmit}
                >
                    <div className="d-flex flex-row justify-content-evenly align-items-center py-2">
                        <div className="form-group py-1">
                            <label htmlFor="f_name">First Name:</label>
                            <input
                                type="text"
                                className="form-control text-center"
                                placeholder="First Name"
                                name="f_name"
                                onChange={handleFirstNameChange}
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
                                onChange={handleLastNameChange}
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
                                onChange={handleEmailChange}
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
                                onChange={handleConfirmEmailChange}
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
                                onChange={handlePasswordChange}
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
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control text-center w-25 mx-auto"
                            placeholder="Company Name"
                            name="company"
                            onChange={handleCompanyChange}
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
