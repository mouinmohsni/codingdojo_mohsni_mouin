import React from 'react'
import { useState } from "react";
import './avr.css'

const Avr = (props) => {
  const [trigger , setTrigger ] = useState(props.trigger);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  console.log(trigger);

  return (trigger ? (
    <div className='popup'>
        <div className='popup_inner' >
        <button className='close-btn' onClick={()=>{setTrigger(false)}}>close</button>

<form className="row gx-3 gy-2 align-items-center">
  <div className="col-sm-3">
    <label className="visually-hidden">Name</label>
    <input type="text" className="form-control" id="specificSizeInputName" placeholder="your comment"/>
  </div>
  <div className="col-sm-3">
    <label className="visually-hidden" >Username</label>
    
  </div>
  <div className="col-sm-3">
    <label className="visually-hidden">Avr. Rating</label>
    <select className="form-select" id="specificSizeSelect">
      <option  >Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div className="col-auto">
    <div className="form-check">
      <label className="form-check-label" >
        you are intetester par this event ?
      </label>
      <input className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
    </div>
  </div>

  <div className="col-auto">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>


        </div>
    </div>
  ):"" 
  )
}

export default Avr