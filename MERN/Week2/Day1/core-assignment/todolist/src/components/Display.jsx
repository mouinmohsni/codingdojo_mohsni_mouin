import React , { useState } from 'react'
import './style.css'


function Display(props) {

    // const [lists , setLists] =useState(props.lists);
    const lists=props.lists ;
    
    const [test, setTest] = useState(false);


    function handleSubmit(idx) {
        console.log(idx);
        const del=[];
        del=lists.filter((list,i)=>{
            if(i !==idx){
            return  props.supp(del)
    }})
        
        
        
    };

console.log(test);
    // function setTest(e){
    //     props.addlists(input);}
    const style = test ? "styleok":"stylenan";
    console.log(style);


return (
    <div>
        {lists.map( (list,idx) => {
            return   <div> 
            <span className={style}>  <div>{list} </div></span> 

            <input type="checkbox" value={idx} onChange={e => setTest(e.target.checked)} /> 
            <button  onClick={(event)=>{handleSubmit(idx)}}>delete</button>
            </div>
        })} 
        </div>
  )
}

export default Display