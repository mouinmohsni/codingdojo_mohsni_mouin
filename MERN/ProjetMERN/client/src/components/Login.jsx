// import  dependencies-------------------------------------------

import React from 'react'
import{ useState ,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBarOut from './NavBarOut';

//-----------------------------------------------------------------
const Login = () => {
    // declaration variable 
  
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({

        login: {
            email: "",
            password: ""
        }
    })


    // --------------------------------handle onChange for login inputs
    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogin({ ...login,[e.target.name]: e.target.value})
    }   

 // Handle login form onSumbit
    const loginHandler = (e) => {
        e.preventDefault();
        console.log(login.email);

        
        axios.post("http://localhost:8000/api/login", login, { withCredentials: true })
            .then(res => {
                console.log("Cookie be like---------------------", document.cookie);
                console.log("Data be like-----------------", res.data.user);
                const id =res.data.user._id
                console.log(id);
                //sessionStorage.setItem( 'User' , JSON.stringify(res.data.user));
                sessionStorage.setItem( 'id' , id);
                

                navigate('/home');
            })
            .catch(err =>
                {
                    setErrors( {...errors, login: err.response.data})
                    console.log(err.response.data);
                })
}








  return (
    <div>
        <NavBarOut />
            <div className="container ">
                <div className="row mt-3">
                    {/* Login Section */}
                    <div className="login col bg-light">
                        <h2>Login</h2>
                        <form className='col-8' onSubmit={loginHandler}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input name="email" onChange={handleLoginChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else 😅</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" onChange={handleLoginChange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            {errors.login ? Object.entries(errors.login).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{JSON.stringify(value)}</p> : null) : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login