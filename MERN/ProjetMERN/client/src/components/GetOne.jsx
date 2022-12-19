import React from 'react'
import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ViewGetOne = (props) => {

    const {_id}=useParams(); // id product
    const id =sessionStorage.getItem('id'); // id user connect now
    const [product , setProduct] =useState({}); // product come from axios get one by _id
    const [trigger , setTrigger] = useState(false);
    const [name, setName] = useState(id);
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [like, setLike] = useState(false);
  // VALIDATION
  const [errors, setErrors] = useState({});

  

 
    //------------------------------------------
     // get  all information of product and number of interessted person by _id come frome useParams
    //------------------------------------------


     useEffect( ()=>{
         axios.get(`http://localhost:8000/api/products/${_id}`, {withCredentials:true})
            .then(response =>{
                console.log(response.data);
                setProduct(response.data);
            })
            .catch(err =>{console.log("thi is error came from axios in get one by id ", err);})
        },[_id]);


        console.log(product);

//--------------------- ADD  new review--------------------------
 const submitHandler = (e) => {
    e.preventDefault();
axios
      .put(`http://localhost:8000/api/products/review/${_id}`, { name , rating , review , like })
      .then((res) => { console.log(" all it is ok ")
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        // console.log(err.response.data.errors['reviews.name'].message);
        const errObj = {};
        for (const key in errorResponse) {
          console.log(key, ' => ', errorResponse[key].message);
          errObj[key] = errorResponse[key].message;
        }
        setErrors(errObj);
        console.log('********', err.response.data.errors);
      });
      setTrigger(false)
    };



        //-------------------------------------------------

  return (
    <div className=' getOne-body'>
        <div >
            {
                trigger ? (
            <div className='popup'>
                <div className='popup_inner' >
                <button className='close-btn' onClick={(e) => setTrigger(false) }>close</button>
                
        
        <form className="row gx-3 gy-2 align-items-center" onSubmit={submitHandler}>
          <div className="col-sm-3">
            <label className="visually-hidden"></label>
            <input type="text" className="form-control" id="specificSizeInputName" placeholder="your comment"
            name="review"
            onChange={(e) => setReview(e.target.value)}
            value={review}
            
            />
          </div>
          
          <div className="col-sm-3">
            <label >Avr. Rating</label>
            <input type="number" className="form-control" 
             name="rating"
             onChange={(e) => setRating(e.target.value)}
             value={rating}
            />
            
          </div>
          <div className="col-auto">
            <div className="form-check">
              <label className="form-check-label" >
                you are intetester par this event ?
              </label>
              <input className="form-check-input" type="checkbox"
              onChange={(e)=>setLike( e.target.checked )} checked={like} name='like'
              
              />
            </div>
          </div>
        
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        
        
                </div>
            </div>
          ):"" 

            }
        </div>
        
         
           <div className="container container-2 bg-light bg-opacity-25 m-5">
                    <div className="row">
          
                        <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                            <div className="services-info">
                                <h2 className="text-white mb-4">{product.title}</h2>
                                <p className="text-white"> category : {product.category}  Genre : {product.genre}</p>
                            
                                <p className="text-white">{product.description}</p>
                                <h6 className="text-white mt-4">{product.date} / {product.location}</h6>
                                <p className="text-white">Please tell your friends about our website. Thank you.</p>
                            
                            {/* <div><h5>Avr. Rating {product.reviews.reduce((v, c) => v + c.rating, 0) /
                    product.reviews.length}</h5></div> */}
                             <button onClick={()=>{setTrigger(true)}}>give your avr .Ratig</button>
                             <div>
                             </div>
                            </div>
                        </div>
                    
                        <div className="col-lg-6 col-12">
                            <div className="about-text-wrap">
                                <img src={product.image}/>
                            </div> 
                            {
                                id==product.owner? "ok":<div className='d-flex column-reverse'>
                                                    {/* <div className='-5'><Link  className="btn custom-btn smoothscroll" to={`/Product/delete/${product._id}`} >Update</Link></div> */}
                                                    <div ><Link  className="btn custom-btn smoothscroll" to={`/Product/delete/${product._id}`} >Delete event</Link></div>
                                                    </div>
                            
                            
                        }
                        
                        </div>
                    </div>
        </div>
        
    </div>
      )
    }   
    export default ViewGetOne