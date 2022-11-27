import React from 'react'

function persone(props) {
    const firstname = props.firstname;
    const lastname = props.lastname;
    const age = props.age;
    const hairColor = props.hairColor;
    

    
    return (
    
        <div>

                
    {/* ---------------- model to chow him in pag ---------- */}
    <h2> {firstname}{lastname} </h2>
    <p>age : {age}</p> 
    <p>Hair Color: {hairColor}</p>
<hr/>
 </div>

  )
}

export default persone





















