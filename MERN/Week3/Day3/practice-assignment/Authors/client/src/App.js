
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Main from './views/main';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
       <h3>welcome </h3>

      <p><Link to={"/books/"}>Home</Link></p>
      <p><Link to={"/books/new"}>Add an auther</Link></p>

       <Routes>
       <Route path="/books" element={<Main />}/>
       <Route path="/books/new" element={<Add />}/>


       </Routes>
    
      

    </div>
  );
}

export default App;
