import React , { useState } from 'react'
import './style.css'

function Formpage(props) {
  const [input, setInput] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    props.addcolor(input);
}



  return (
    <div >
        <form onSubmit={submitHandler} className='formulaire'>
        <label htmlFor=""> color  :</label> <p><input type="text" onChange={(e) => {setInput(e.target.value)}} /></p>
                
          <p><button> add</button></p>
        </form>
    </div>
  )
}

export default Formpage