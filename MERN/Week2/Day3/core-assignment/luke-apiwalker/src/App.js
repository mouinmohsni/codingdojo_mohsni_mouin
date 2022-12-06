
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  Forme  from './components/Forme';
import './App.css';
import Display from './components/Display';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const arr=['people','planets'];
  const [data , setdata]=useState('');
  const [id , setId]=useState('');
  const [responseData, setResponseData] = useState([]);
  // const [linkApi , setLinkApi ] =useState('');s

  const sendData =(data , id , responseData )=>{
    setdata(data);
    setId(id);
    setResponseData(responseData);
    console.log(responseData)
    console.log(id);
    

  }





  return (
    <div className="App">
    
        <Forme  arr={arr} sendData={sendData} />
        {/* <Display responseData={responseData} /> */}


        <Routes>
        <Route path="/:data/:id" element={ <Display responseData={responseData} />} />
        </Routes>

        {responseData.name}
        

        {/* this information came form sand data {data} and this is the id {id} */}

        
    
    </div>
  );
}

export default App;
