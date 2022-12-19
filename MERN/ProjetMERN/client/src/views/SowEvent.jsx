
// import library------------------------------------------------------------------------------------------------------------------------
import {useEffect,useState} from 'react';         
import axios from 'axios';                               

// import component from views----------------------------------------------------------------------------------------------------------------

import { Navigate } from 'react-router-dom';

import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';

//============================================================================================================================================


const SowEvent = () => {
    const [Products , setProducts] =useState([]);
    const [loding , setLoding ] = useState(true);
    const id =sessionStorage.getItem('id');

    const categories =[ 
        {id:"1" , name : "music"} ,
        {id:"2" , name :"theater"} ,
        {id:"3" , name : "cinema"} ,
        {id:"4" , name : "other"},
        ];
        const [newcat , setNewcat] =useState([]);
        const [inputs , setInputs] =useState("");
        console.log(inputs);
    
        const [category, setCategory ] =useState(null);
    // use useEffect  to rendering the page  one time ---------------------------------------------------
    useEffect( ()=>{

        axios.get(`http://localhost:8000/api/products`, {withCredentials:true}) 
        .then(response =>{
            console.log(response.data); 
            setProducts(response.data);
            setLoding(false)})
        .catch(err =>Navigate('/login'))
    },[]);

    
    

 
  return (
    <div>
        <NavBar />
        <section className="about-section section-padding" >
            <div className="col-lg-6 col-md-6 col-12">
        {/* ---------------------------- select categories ---------------------- */}
                                                    
                                <select  type="text" name="subject" id="idcategory" className="form-control" placeholder="Cathegorie" required  onChange={(e)=>{setInputs(e.target.value) }} value={inputs.category} > 
                                    <option value="0" >select category</option>
                                    {categories && categories !== undefined ?
                                    categories.map((categ)=>{
                                    return (
                                            <option  key={categ.id} value={categ.name} >{categ.name}</option>)
                                            }) : "no categories"
                                                        }
                                </select>
                                                </div>
                    
                                                <br/><br/><br/>
                    {Products.filter(product=>product.category===inputs) .map((product)=>{ 
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
                                
                                
                                {id===product.owner.id? <Link  className="btn custom-btn smoothscroll" to={`/Product/delete/${product._id}`} >Delete event</Link>: ""}
                                


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
  )
}

export default SowEvent

