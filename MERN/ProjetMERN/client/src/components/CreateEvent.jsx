import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import NavBar from './NavBar';



const CreateEvent= (props) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const [inputs,setInputs]=useState({ title : "" , category: "" , genre : "" , image : "" , adress : "" , location:"", date:"" , description:"" , owner : ""})
    const id =sessionStorage.getItem('id');
    console.log(id);

    if (id === ""){
        navigate("/login");
    }
//------------------------------------------------------------------------
const categories =[ 
    {id:"1" , name : "music"} ,
    {id:"2" , name :"theater"} ,
    {id:"3" , name : "cinema"} ,
    {id:"4" , name : "other"},
    ];

const genres =[
    //-------------- music
    {id : "1", categoryname : "music" , name :"Rock music"},
    {id : "2", categoryname : "music" , name :"Electronic music"},
    {id : "3", categoryname : "music" , name :"Hip hop music"},
    {id : "4", categoryname: "music" , name :"Jazz"},

    //------------- cinema

    {id : "5", categoryname : "cinema" , name :"Aventure "},
    {id : "6", categoryname : "cinema" , name :"Action"},
    {id : "7", categoryname : "cinema" , name :"Science-fiction"},
    {id : "8", categoryname : "cinema" , name :"Anime"},

     //------------- theater

    {id : "5", categoryname : "theater", name :"Musical theatre "},
    {id : "6", categoryname : "theater", name :"Comedy"},
    {id : "7", categoryname : "theater" , name :"Romantic comedy"},
    


]
const [category ,setCategory] = useState([]);
const [genre ,setGenre] = useState([])



useEffect (()=>{
    setCategory(categories)
},[])

const handlecategory =(name)=>{
   
    setGenre (genres.filter(x=>x.categoryname === name) ) ;
    console.log("this is  genre",category);
}

//---------------------------------------------------------------------------------
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newProduct = {
                title: inputs.title,
                category: inputs.category,
                genre: inputs.genre,
                image: inputs.image,
                adress :inputs.adress,
                location: inputs.location,
                date: inputs.date,
                description: inputs.description,
                owner : id ,
        
        }

            console.log(newProduct);
            axios.post("http://localhost:8000/api/products", newProduct, {withCredentials:true}) 
            .then(res=>{
                console.log(" it is ok ",res.data);
                navigate("/home");
            })
            .catch(err=>{
                const errorResponse = err.response.data.error.errors;
                console.log(errorResponse);
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)                }
                // Set Errors
                setErrors(errorArr);
            })
            
            
    
    }


  return (
    <section  className="contact-section section-padding"  >
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12 mx-auto">
                <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                    <form  className="custom-form contact-form mb-5 mb-lg-0" onSubmit={handleSubmit}>

                                        <input type="text" name="contact-name" id="contact-name"  className="form-control" placeholder="Title" onChange={(e)=>setInputs({...inputs, title: e.target.value})} value={inputs.name} />
        
                                        <div className="contact-form-body" > 
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    {/* ---------------------------- select categories ---------------------- */}
                                                    
                                                <select  type="text" name="subject" id="idcategory" className="form-control" placeholder="Cathegorie" required  onChange={(e)=>{handlecategory(e.target.value);setInputs({...inputs, category : e.target.value }) }} value={inputs.category} > 
                                                        <option value="0" >select category</option>
                                                        {
                                                            category && category !== undefined ?
                                                            category.map((categ)=>{
                                                                return (
                                                                <option  key={categ.id} value={categ.name} >{categ.name}</option>
                                                                )

                                                            }) : "no category"                                                 
                                                        
                                                        }
                                                        
                                                </select>
                                                </div>
                                                {/* ---------------------------- select Genre ---------------------- */}
                                                <div className="col-lg-6 col-md-6 col-12">
                                                <select  type="text" name="topic-name" id="idgenre" className="form-control" placeholder="Genre" required onChange={(e)=>setInputs({...inputs, genre: e.target.value})} value={inputs.genre}>
                                                        <option value="0" >select Genre</option>
                                                        {
                                                            genre && genre !== undefined ?
                                                            genre.map((gen,idx)=>{
                                                                return (
                                                                <option  key={idx} value={gen.name} >{gen.name}</option>
                                                                )

                                                            }) : "no Gnre"                                                 
                                                        
                                                        }
                                                </select>                                                
                                                </div>
                                            </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <input type="date" name="contact-name" id="contact-name" className="form-control" placeholder="Date" required onChange={(e)=>setInputs({...inputs, date: e.target.value})} value={inputs.date}/>
                                                </div>
                                            <div className="row"> 
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <input type="text" name="contact-name" id="contact-name"  className="form-control" placeholder="Localion" onChange={(e)=>setInputs({...inputs, adress: e.target.value})} value={inputs.adress} />
                                                </div> 
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <select  type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Location" required  onChange={(e)=>setInputs({...inputs, location: e.target.value})} value={inputs.location}>
                                                            <option value="slect">Location</option>
                                                            <option  value="Tunis">Tunis</option>
                                                            <option value="Ben Arous">Ben Arous</option>
                                                            <option value="Manouba">Manouba</option>
                                                            <option value="Ariana">Ariana</option>
                                                    </select>
                                                </div>
                                             </div> 
                                            <input type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Image" required onChange={(e)=>setInputs({...inputs, image: e.target.value})} value={inputs.image} />
                                            

                                            <textarea name="contact-message" rows="3" className="form-control" id="contact-message" placeholder="Description" onChange={(e)=>setInputs({...inputs, description: e.target.value})} value={inputs.description}></textarea>

                                            <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                                <button type="submit" className="form-control">Create Event</button>
                                            </div>
                                        </div>        
                                    
                                    
                                    </form>
                                
                                
                                </div>
                    
                    
                    
                </div>
                    





















                </div>
            </div> 
        </div>
    </section>
  )
}

export default CreateEvent