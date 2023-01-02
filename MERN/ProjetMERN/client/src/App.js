import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import GetAll from './components/GetAll';
import CreateEvent from './components/CreateEvent';
import Logout from './components/Logout';
import Login from './components/Login';
import GetLand from './components/GetLand'
import ViewGetOne from './views/ViewGetOne';
import Test from './components/Test';
import Delete from './components/Delete';
import SowEvent from './views/SowEvent';
import Avr from './components/Avr';



function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/home" element={<GetAll />} />
        <Route path="/landing" element={<GetLand />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
        <Route path="/Logout" element={<Logout />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/Product/:_id' element={<ViewGetOne />} />
        <Route path='/Product/delete/:_id' element={<Delete />} />
        <Route path='/ShowEvents' element={<SowEvent />} />

      </Routes>
      
    </div>
  );
}

export default App;
