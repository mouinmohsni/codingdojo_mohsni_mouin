//---------------------------------------------------------------------------------------------------------------------------------------
// import react -----------------------------------------
import React from 'react';
// importe css file -------------------------------
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import library------------------------------------------------------------------------------------------------------------------------
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
import {Link} from "react-router-dom";                      // link to go in other  component
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
import axios from 'axios';                                // axios to communicate with IPA
//============================================================================================================================================

const Main = (props) => {

// initialization variber------------------------------------------------------------ 

    const Navigate = useNavigate();
    const [notes, setNotes]= useState([]);

// call IPA to keep  all information  from DB===============================================================

        // use useEffect  to rendering the page  one time ---------------------------------------------------
            useEffect( ()=>{
                // call DB with axios and using IPA === GetAll (find) === -----------
                axios.get(`http://localhost:8000/api/notes/`)                                                   // call IPA
                .then(response =>{
                    console.log(response.data);                                                              //console.log  response from DB
                    setNotes(response.data)})                                                               // put reponse form DB in Notes varible 
                .catch(err =>{console.log("thi is error came from axios in allNote ", err);})               // if err catch err
            },[]);
        //-----------------------------------------------------------------------------------------------------
// =============================================================================================================

const update=(id)=>{
    Navigate(`/update/${id}`)
}

const deletenote=(id)=>{
  
    axios.delete(`http://localhost:8000/api/notes/delete/${id}`)
    .then(response =>{
        console.log(response.data);
        console.log("delete is ok");
        setNotes(notes.filter((note)=> note._id !== id)) 
    })
    .catch(err =>{console.log("thi is error came from axios in delete ", err);})
    
}



    return (<div className="">
        {notes.map(note=>{
        return <div key={note._id}>
            <div className="card p-5 w-50 border " >
                <div className="card-header">
                    <Link to={`/note/${note._id}`}>
                        <h3>{note.is_Impotant ? "🚀🚀":""} {note.title}</h3>
                    </Link>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.Content}</h5>
                    <button className="btn btn-primary" on onClick={()=>{update(note._id)}}> Edit</button>
                    <button className="btn btn-primary" onClick={()=>{deletenote(note._id)}}>Delete</button>
                    <p>{note.createdAt}</p>
                </div>
                

            </div>
        </div>
        })}

        </div>
        )
    }
    export default Main

