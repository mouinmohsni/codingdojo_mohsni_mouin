import React, { useState } from 'react';
import Formpage from './components/Formpage';
import Display from './components/Display';

function App() {
  //const colors =[ "red" , "black"] ;
  const [colors, setColors] = useState([ "red" , "black" ,"pink"]);

  const addcolors = (newcolor)=>{

      setColors([...colors, newcolor])
    console.log(colors);
    }

  return (
    <div className="App">
      <Formpage  addcolor ={addcolors}/>
      <div className='box'>
      {colors.map( (color) => {
            return <Display bg={color}/> 
        })} 
        </div>
    </div>
  );
}

export default App;
