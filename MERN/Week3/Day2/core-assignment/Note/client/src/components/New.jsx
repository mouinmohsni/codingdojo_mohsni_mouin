import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const New = () => {
  const [inputs, setInputs]= useState({title :"", Content:"",isImprotant : false });
    const Navigate = useNavigate();


  const newNote =(e)=>{
    e.preventDefault();

    const note ={
      title : inputs.title,
          Content :inputs.Content,
          is_Impotant :inputs.isImprotant
    }
    console.log(note);
    axios.post(`http://localhost:8000/api/note/new`, note )
    .then(response =>{console.log(response.data);
      Navigate("/notes");})
    .catch(err =>{console.log("thi is error came from axios in allNote ", err);})

  }




  return (
    <div className='w-50 content d-flex justify-content-center ' >
      <h3> new note</h3>
    <form className='m-5 p-4 d-flex  row justify-content-center ' onSubmit={newNote}>
      
        <div className="mb-3">
            <label className="form-label"> <h1>Title</h1> </label>
            <input type="text" className="form-control" value={inputs.title} onChange={(e)=>setInputs({...inputs, title : e.target.value })}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Contant</label>
            <input  value={inputs.Content} className="form-control"  onChange={(e)=>setInputs({...inputs, Content : e.target.value })}/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox"   onChange={(e)=>setInputs({...inputs, isImprotant : e.target.checked })}/>
            <label className="form-check-label" >it is improtant</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
)

  
}

export default New