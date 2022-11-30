import React , { useState } from 'react'

function Todo(props) {
    const [input, setInput] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
        props.addlists(input);
    }

return (
    <div>
        <div> My to do list</div>
    <form onSubmit={submitHandler}>
        <label> add your to do liste</label>
        <input onChange={(e)=>{setInput(e.target.value)}} />
        <button>add</button>
    </form>




    </div>
  )
}

export default Todo