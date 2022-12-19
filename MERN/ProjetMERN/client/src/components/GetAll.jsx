import React from 'react'

// import library------------------------------------------------------------------------------------------------------------------------
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
import axios from 'axios';                                // axios to communicate with IPA

// import component from views----------------------------------------------------------------------------------------------------------------
import Home from './Home';

import { useNavigate } from "react-router-dom";
//============================================================================================================================================

const GetAll = () => {
    const [Products , setProducts] =useState([]);
    const [loding , setLoding ] = useState(true);
    const Navigate = useNavigate();

// call IPA to keep  all information  from DB===============================================================

        // use useEffect  to rendering the page  one time ---------------------------------------------------
        useEffect( ()=>{
            // call DB with axios and using IPA === GetAll (find) === -----------
            axios.get(`http://localhost:8000/api/products`, {withCredentials:true})                                                   // call IPA
            .then(response =>{
                console.log(response.data);                                                              //console.log  response from DB
                setProducts(response.data)                                                                 // put reponse form DB in Notes varible 
                setLoding(false)})
            .catch(err =>Navigate('/login'))               // if err catch err
        },[]);
    //-----------------------------------------------------------------------------------------------------
    if (Products.length==0) {
        Navigate('/CreateEvent')
    } 
// =============================================================================================================

  return (
    <div className='App'>

        
        { 
        
            // JSON.stringify(Products)
            loding ? "loding" : <Home Products={Products} /> 

        }
    </div>
  )
}

export default GetAll