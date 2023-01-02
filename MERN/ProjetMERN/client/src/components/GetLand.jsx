import React from 'react'

// import library------------------------------------------------------------------------------------------------------------------------
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
import axios from 'axios';                                // axios to communicate with IPA
import {Link} from "react-router-dom";

// import component from views----------------------------------------------------------------------------------------------------------------
import Home from './Home';
import { useNavigate } from "react-router-dom";
import LandPage from './LandPage';
import NavBarOute from './NavBarOut';
//============================================================================================================================================

const GetLand = () => {
    const [Products , setProducts] =useState([]);
    const [loding , setLoding ] = useState(true);
    const Navigate = useNavigate();


// call IPA to keep  all information  from DB===============================================================

        //use useEffect  to rendering the page  one time ---------------------------------------------------
        useEffect( ()=>{
            // call DB with axios and using IPA === GetAll (find) === -----------
            axios.get(`http://localhost:8000/api/product`)                                                   // call IPA
            .then(response =>{
                console.log(response.data);                                                              //console.log  response from DB
                setProducts(response.data)                                                                 // put reponse form DB in Notes varible 
                setLoding(false)})
            //.catch(err =>Navigate('/login'))               // if err catch err
        },[]);
    //-----------------------------------------------------------------------------------------------------
// =============================================================================================================
// if (Products.length==0) {
//     Navigate('/login')
// } 

  return ( 
      <div>
        { Products.length==0 ?
        <div >
        <NavBarOute />
        <div className="body">
        <section className="hero-section" >
                <div className="section-overlay"></div>

                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row">

                            <div className="col-12 mt-auto mb-5 text-center">
                              <h1 className="text-white mb-5"> we don't  have events for now</h1>
                                <a  href="#section_2"></a>
                                <Link  className="btn custom-btn smoothscroll" to={`/login`} >Let's begin</Link>
                            </div>
                            <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                                <div className="date-wrap">
                                    <h5 className="text-white">
                                        <i className="custom-icon bi-clock me-2"></i>
                                        
                                    </h5>
                                </div>

                                <div className="location-wrap mx-auto py-3 py-lg-0">
                                    <h5 className="text-white">
                                        <i className="custom-icon bi-geo-alt me-2"></i>
                                        
                                    </h5>
                                </div>

                                <div className="social-share">
                                    <ul className="social-icon d-flex align-items-center justify-content-center">
                                        <span className="text-white me-3">Share:</span>

                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link">
                                                <span className="bi-facebook"></span>
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link">
                                                <span className="bi-twitter"></span>
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link">
                                                <span className="bi-instagram"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video-wrap">
                    <video autoPlay="" loop="" muted="" className="custom-video" poster="">
                        <source src="/video/pexels-2022395.mp4" type="video/mp4"/>
                        
                    </video>
                </div>
                    
            </section>
        </div>
    </div> : <div className='App'>
        {
            // JSON.stringify(Products)
            loding ? "loding" : <LandPage Products={Products} /> 

        } 
    </div>
    }</div>
  )
}

export default GetLand