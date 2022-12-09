import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './components/New';
import Updatenote from './components/Updatenote';
import Onenote from './components/Onenote';

function App() {
  return (
    <div className="App">
      <h1> Notes</h1>
      <div >
      <p><Link to={"/notes/"}>Home</Link> </p> 
        <p> <Link to={"/create"}>Create</Link></p>
        <hr/>
        <Routes>
          <Route path="/notes" element={<Main />}/> 
          <Route path="/create" element={<New />}/>
          <Route path="update/:id" element={<Updatenote />}/>
          <Route path="note/:id" element={<Onenote />}/>


        </Routes>
      </div>

    </div>
  );
}

export default App;
