import React from 'react'
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";


const Onenote = (props) => {

    const [oneNote, setOneNote] = useState({});
    const {id} = useParams();

    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(response =>{
            console.log(response.data);
            setOneNote(response.data)})
        .catch(err =>{console.log("thi is error came from axios in allNote ", err);})
    },[]);


  return (
  <div> {
        oneNote ? <div>{oneNote.title}

                    <h3>{oneNote.is_Impotant ? "🚀🚀":""} {oneNote.title}</h3>
                        <p>{oneNote.Content}</p>
                        <p>{oneNote.createdAt}</p>
                </div> : "loding"
        
        }

</div>
  )
}

export default Onenote