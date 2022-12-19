import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Logout = (props) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();



        axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true })
            .then((res) => {
                setUser(res.data)
                console.log("response data: ", res.data);
                sessionStorage.clear();
                navigate("/landing");
            })
            .catch(err => console.log(err))
        navigate("/");
    


    return (
        <div>
            
        </div>
    )
}

export default Logout