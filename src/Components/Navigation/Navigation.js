import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {

  let navigate = useNavigate();
  
  const handleLogout = (e) =>{
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 bg-white" data-bs-theme="light" data-testid="navigation-component">
        <div className="container-fluid">
            <span className="navbar-brand">Quickly challenge</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" replace to={"/login"}>Login</Link></li>
                <li className="nav-item"><Link className="nav-link" replace to={"/signup"}>Signup</Link></li>
                <li className="nav-item"><Link className="nav-link" replace to={"/profile"}>Profile</Link></li>
            </ul>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" replace to={"/logout"} onClick={handleLogout}>Logout</Link></li>
                <li className="nav-item d-flex flex-column justify-content-center align-items-center">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" aria-checked="false" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation