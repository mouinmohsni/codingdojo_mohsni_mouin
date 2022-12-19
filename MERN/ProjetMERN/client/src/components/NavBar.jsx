import React from 'react'
import {Link} from "react-router-dom";
//import '../style/style.css';
import '../style/bootstrap-icons.css';
import '../style/bootstrap.min.css'
import '../style/templatemo-festava-live.css'


const NavBar = () => {

    // const updateplayer = (_id)=>{
    //     Navigate(`/pirates/${_id}`)
    // }
    // const deleteplayer =(_id)=>{
    //     Navigate(`/delete/${_id}`)
    // }
    // const createPirate =()=>{
    //     Navigate(`/pirates/new`)
    // }



    return (
            <div>


        <nav className="navbar navbar-expand-lg bg-light" >
                <div className="container">
                    
                Out Of The Box

                    

                    
                    <Link   className="btn custom-btn d-lg-none ms-auto me-4" to={"/Logout"} >Logout</Link>
                    
    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                            <li className="nav-item">
                                <Link  className="nav-link click-scroll" to={"/home"} >Home</Link>
                            </li>
    
                            <li className="nav-item">
                            <Link  className="nav-link click-scroll" to={"/ShowEvents"} >Show Events</Link>
                                <link  />
                            </li>
    
                            <li className="nav-item">
                                <Link  className="nav-link click-scroll" to={"/CreateEvent"} >Create Event</Link>
                            </li>

                            <li className="nav-item">
                            <Link  className="nav-link click-scroll" to={"/AboutUs"} >About Us</Link>
                            </li>
    
                            <li className="nav-item">
                            <Link  className="nav-link click-scroll" to={"/Contact"} >Contact</Link>
                            </li>
                            <li>
                            <Link   className="btn custom-btn d-lg-block d-none" to={"/logout"} >Login</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>




    </div>
  )
}

export default NavBar