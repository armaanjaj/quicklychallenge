import React, { useEffect, useState } from "react";
import ProfileData from "../../Components/Profile/ProfileData";
import useAxios from "../../hooks/useAxios";
import Page401 from "./Page401";

const PROFILE_URL = "/auth/user";

function Profile() {
    const [data, setData] = useState([]);
    const [page401, setPage401] = useState(false);

    const { response } = useAxios({
        method: "get",
        url: PROFILE_URL,
        headers: JSON.stringify({
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwtToken"))}`
            },
        }),
        body: JSON.stringify({}),
    });

    useEffect(() => {
        if (response !== null) setData(response);
        else setPage401(true);
    }, [response]);

    if(page401 === true) return <Page401/>
    else return(
        <div>
            <ProfileData 
            full_name={data.full_name}
            first_name={data.first_name}
            last_name={data.last_name}
            email={data.email}
            company={data.Company}
            />
        </div>
    )
}

export default Profile;
