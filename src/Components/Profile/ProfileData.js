import React from "react";

function ProfileData({data}) {
    return (
        <div data-testid="profile-data-component">
            <ul className="list-group">
                <li className="list-group-item"><h3>Welcome {data.full_name}</h3></li>
                <li className="list-group-item">First Name: {data.first_name}</li>
                <li className="list-group-item">Last Name: {data.last_name}</li>
                <li className="list-group-item">Email: {data.email}</li>
            </ul>
        </div>
    );
}

export default ProfileData;
