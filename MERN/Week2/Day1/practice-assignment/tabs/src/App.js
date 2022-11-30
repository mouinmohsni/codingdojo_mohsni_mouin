import Page1 from './components/Page1';
import './App.css';

function App() {
  const table = [
                    {"tab1": "tab 1 countent is showing here"},
                    {"tab2": "tab 2 countent is showing here"},
                    {"tab3": "tab 3 countent is showing here"},
    ]

  return (
    <div className="App">
      
      <Page1 tab ={table}/>
   
    </div>
  );
}

export default App;
