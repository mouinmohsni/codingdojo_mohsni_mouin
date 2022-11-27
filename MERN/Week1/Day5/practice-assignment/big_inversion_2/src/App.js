import './App.css';
import Persone from './components/persone';

let people = [

              {"firstname":"John", "lastname":"Smith","age":88,"hairColor":"Brown"},
              {"firstname":"Jane", "lastname":"Doe", "age":45, "hairColor":"Black"},
              {"firstname":"maria", "lastname":"Smith","age":60,"hairColor":"Brown"},
              {"firstname":"millard", "lastname":"Fillmore" , "age":50, "hearColer": "Brown "}]




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {people.map( (pers,index) => {
            return <Persone firstname={pers.firstname} lastname={pers.lastname} age={pers.age} hairColor={pers.hairColor} key={index}/> 

        })} 
      
      </header>
    </div>
  );
}

export default App;
