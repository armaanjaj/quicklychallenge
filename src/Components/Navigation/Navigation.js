import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white" data-bs-theme="light" data-testid="navigation-component">
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
        </div>
    </nav>
  )
}

export default Navigation