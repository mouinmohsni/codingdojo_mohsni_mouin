import React from 'react'

const Test = () => {

    let obj ={name :"aaa" , id:"sfsfgdfg"}
    const setdata =()=>{
    //sessionStorage.setItem( 'mydata' , JSON.stringify(obj));
    console.log( 'it ok ');
    }


  return (
    <div>Test
        <button onClick={()=>{setdata()}}> set </button>
        
    </div>
  )
}

export default Test