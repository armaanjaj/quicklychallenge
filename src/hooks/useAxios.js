import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = ({method, url, headers, body}) => {

    const [response, setResponse] = useState({});

    useEffect(() => {
        if(method === "get"){
            axios
                .get(url, JSON.parse(headers))
                .then(res => {
                    if(res && res.data.success){
                        setResponse(res.data.user)
                    }
                })
                .catch(error => {
                    console.log(error.response.data.message);
                    if(error.response.status === 401) setResponse(null);
                });
        } else {
            axios
                .post(url, body, JSON.parse(headers))
                .then(res => {
                    if(res && res.data.success){
                        setResponse(res.data.success)
                    }
                })
                .catch(error => {
                    setResponse(null);
                });
        }
    }, [method, url, headers, body]);

    return {response}
}

export default useAxios;