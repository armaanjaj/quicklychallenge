import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function ProfileData({
    full_name,
    first_name,
    last_name,
    email,
    company
}) {

    let navigate = useNavigate();

    const handleLogout = (e) =>{
        localStorage.clear();
        navigate("/login");
      }

    if(company === undefined) return <Loader/>

    return (
        <div data-testid="profile-data-component" className="container h-75 mt-5 w-25">
            <ul className="list-group shadow bg-white">
                <li className="list-group-item"><h3>Welcome {full_name}</h3></li>
                <li className="list-group-item"><h5>First Name:</h5> {first_name}</li>
                <li className="list-group-item"><h5>Last Name:</h5> {last_name}</li>
                <li className="list-group-item"><h5>Email:</h5> {email}</li>
                <li className="list-group-item"><h5>Company:</h5> {company.name}</li>
                <li className="list-group-item">
                <button
                        className="btn btn-primary btn-customized my-2 w- mx-auto"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default ProfileData;
