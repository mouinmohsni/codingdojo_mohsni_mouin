
import React, { useState } from 'react';
import Display from './components/Display';
import Todo from './components/Todo'


function App() {


   const [lists, setLists] = useState([ "kill someone" , "drink blood of my peer" ]);

  const addlists = (newlist)=>{
      setLists([...lists, newlist])}

  const supp =(item) =>{
    console.log("test");
    setLists(item)
  }
  
      
  return (
    <div className="App">

    
      <Todo  addlists ={addlists}/>
      <div>
          <Display lists={lists} supp ={supp} /> 
        </div>
        
    </div>
  );
}

export default App;