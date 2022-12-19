//import {Link} from "react-router-dom";                      // link to go in other  component
// import library------------------------------------------------------------------------------------------------------------------------
import React from 'react'
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
import axios from 'axios';                                // axios to communicate with IPA
import { useParams  } from "react-router";

const Delete = (props) => {

const Navigate = useNavigate();
const {_id}=useParams();
const [event , setEvent ] =useState({});
console.log(_id);



// useEffect( ()=>{
//   axios.get(`http://localhost:8000/api/players/${_id}`)
//   .then(response =>{
//       console.log(response.data);
//       setEvent(response.data)})
//   .catch(err =>{console.log("thi is error came from axios in get one by id ", err);})
// },[]);





  axios.delete(`http://localhost:8000/api/products/${_id}`)
  .then(response =>{
      console.log(response.data);
      console.log("delete is ok");
      Navigate(`/home`)
      //setNotes(notes.filter((note)=> note._id !== id)) 
  })
  .catch(err =>{console.log("thi is error came from axios in delete ", err);})





  return (
    <div>
       



    </div>
  )
}

export default Delete