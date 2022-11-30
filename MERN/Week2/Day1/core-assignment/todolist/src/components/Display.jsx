import React , { useState } from 'react'
import './style.css'


function Display({lists, setLists}) {

    // const [lists , setLists] =useState(props.lists);
    
    const [test, setTest] = useState('');
    const [newlist , setNewlist] =useState('');

    function handleSubmit(idx) {
        console.log(idx);
        let del=[];
        
        del=lists.filter((task,i)=>{
            return i !== idx
    })
    console.log("test 2");
    console.log(del);
    setLists(del)
        
        
        
    };

     const chek =function setTest(idx){
        console.log(idx);
    }
    const style = test ? "styleok":"stylenan";
    console.log(style);


return (
    <div>
        {lists.map( (list,idx) => {
            return   <div> 
            
            <span className={style}>  <div>{list} </div></span> 

            {/* <input type="checkbox" onChange={e => setTest(e.target.checked)} />  */}
            <input type="checkbox" onChange={setTest(idx)} /> 
            <button  onClick={(event)=>{handleSubmit(idx)}}>delete</button>
            </div>
        })} 
        </div>
    )
}

export default Display