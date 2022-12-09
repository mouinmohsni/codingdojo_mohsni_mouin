import React from 'react'
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,useParams} from "react-router-dom";




const Updatenote = (props) => {
  const [inputs, setInputs]= useState({title :"", Content:"",is_Impotant : false });
    const Navigate = useNavigate();
    const {id} = useParams();


    useEffect( ()=>{
      axios.get(`http://localhost:8000/api/notes/${id}`)
      .then(response =>{
          console.log(response.data);
          setInputs(response.data)})
      .catch(err =>{console.log("thi is error came from axios in get one by id ", err);})
  },[]);



const  update= (e)=>{
    e.preventDefault();

    const note ={
        title : inputs.title,
        Content :inputs.Content,
        is_Impotant :inputs.is_Impotant
    }
    
        axios.put(`http://localhost:8000/api/notes/update/${id}`, note )
        .then(response =>{console.log(response.data);
        Navigate("/notes");})
        .catch(err =>{console.log("thi is error came from axios in update ", err);})

}



  return (
    <div>
        <div className='w-50 content d-flex justify-content-center ' >
      
    <form className='m-5 p-4 d-flex  row justify-content-center ' onSubmit={update}>
   
        
        <h3> update note</h3>
          <h1>Title</h1> 
            <input type="text"  value={inputs.title} onChange={(e)=>setInputs({...inputs, title : e.target.value })}/>
        
        
            <label >Contant</label>
            <input  value={inputs.Content} className="form-control"  onChange={(e)=>setInputs({...inputs, Content : e.target.value })}/>
     
        
            <input type="checkbox"  checked={inputs.is_Impotant}  onChange={(e)=>setInputs({...inputs, is_Impotant : e.target.checked })}/>
            <label>it is improtant</label>
              {JSON.stringify(inputs) } 
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
    </div>
  )
}

export default Updatenote