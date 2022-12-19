import React, {useEffect, useState}from 'react'
import NavBar from './NavBar'
import {Link} from "react-router-dom";

import '../style/style.css'
// import library------------------------------------------------------------------------------------------------------------------------
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 


const Home = (props) => {
    const Navigate = useNavigate();
    const Products = props.Products;
    // const user =sessionStorage.getItem('User');
    const length = (Products.length)-1;
    
    const [num, setNum] = useState(0);
    useEffect( ()=>{
        setNum (Math.floor(Math.random() * (length - 0 + 1)) + 0);
    },[]);
    console.log(num);
    
    const id =sessionStorage.getItem('id');
    
   

  return (
    <div >
        <NavBar />
        <div className="body">
        <section className="hero-section" >
                <div className="section-overlay"></div>

                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row">

                            <div className="col-12 mt-auto mb-5 text-center">
                                
                                <h1 className="text-white mb-5">{Products[num].title}</h1>
                                <a  href="#section_2"></a>
                                <Link  className="btn custom-btn smoothscroll" to={`/Product/${Products[num]._id}`} >Let's begin</Link>
                            </div>
                            <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                                <div className="date-wrap">
                                    <h5 className="text-white">
                                        <i className="custom-icon bi-clock me-2"></i>
                                        {Products[num].date}
                                    </h5>
                                </div>

                                <div className="location-wrap mx-auto py-3 py-lg-0">
                                    <h5 className="text-white">
                                        <i className="custom-icon bi-geo-alt me-2"></i>
                                        {Products[num].location}
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
            {/* {user} */}
            
            <section className="about-section section-padding" >
                    
                    {Products.map((product)=>{
                        return<div className="container container-2" key={product._id}>
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                            <div className="services-info">
                                <h2 className="text-white mb-4">{product.title}</h2>
                                <p className="text-white"> category : {product.category}  Genre : {product.genre}</p>
                                <p className="text-white">{product.description}</p>
                                <h6 className="text-white mt-4">{product.date} / {product.location}</h6>
                                <p className="text-white">Please tell your friends about our website. Thank you.</p>
                                <Link  className="btn custom-btn smoothscroll" to={`/Product/${product._id}`} >Let's begin</Link>
                                
                                
                                {id===product.owner._id? <Link  className="btn custom-btn smoothscroll" to={`/Product/delete/${product._id}`} >Delete event</Link>: ""}
                                


                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-text-wrap">
                                <img src={product.image}/>

                            </div>
                        </div>

                    </div>
                </div>
                    })}
            </section>
        </div>
    </div>
  )
}

export default Home