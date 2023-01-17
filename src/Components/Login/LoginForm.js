import React from "react";
import {Link} from "react-router-dom";

function LoginForm({handleEmailChange, handlePasswordChange, handleSubmit}) {
    return (
        <>
            <div
                className="d-flex flex-column justify-content-center container h-75 mt-5 w-25 border rounded shadow py-5 px-3 mb-5 bg-white"
                data-testid="login-component"
            >
                <div className="text-center">
                    <span className="fw-bold display-6">Login</span>
                </div>
                <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                    <div className="form-group py-2">
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
                    <div className="form-group py-2">
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
