import React,{ useState } from 'react'
import { useParams } from "react-router";

function Display(props) {
   const responseData=props.responseData
  const {data} = useParams();




  return (
    <div>

      <p>{data}</p>
      {JSON.stringify(responseData) }
      
      { data ==="people"? <div>
        <h1> { responseData.name}</h1>
        <p> height :  {responseData.height} </p>
        <p> mass : {responseData.mass} </p>
        <p> hair color : {responseData.hair_color} </p>
        <p>skin color : {responseData.skin_color}</p>
     </div>:<div>
     <h1> { responseData.name}</h1>
        <p> rotation period :  {responseData.rotation_period} </p>
        <p> orbital period : {responseData.orbital_period} </p>
        <p> diameter : {responseData.diameter} </p>
        <p>climate: {responseData.climate}</p>
    </div>
  
    }


</div>
  )
}

export default Display