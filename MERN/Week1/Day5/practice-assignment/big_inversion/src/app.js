import './App.css';
import Persone from './components/persone';

let people = [

              {"firstname":"John", "lastname":"Smith","age":88,"hairColor":"Brown"},
              {"firstname":"Jane", "lastname":"Doe", "age":45, "hairColor":"Black"},




]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {people.map( pers => {
            return <Persone firstname={pers.firstname} lastname={pers.lastname} age={pers.age} hairColor={pers.hairColor} /> 

        })}


      </header>
    </div>
  );
}

export default App;
