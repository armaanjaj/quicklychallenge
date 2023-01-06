import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfileData() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchUser(localStorage.getItem("jwtToken"));
    }, []);

    const fetchUser = (jwt) => {
        axios
            .get("/auth/user", {
                headers: {
                    Authorization: `Bearer ${JSON.parse(jwt)}`
                }
            })
            .then(response => {
                if(response.data.success){
                    setData(response.data.user)
                }
            })
            .catch(error => {
                console.log(error)
                alert(error.response.data.message);
            })
            .finally(() => {
                // alert("Processed!")
            });
    }
    

    return (
        <div>
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
