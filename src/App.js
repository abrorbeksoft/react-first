// import logo from './logo.svg';
import './App.css';
import Map from "./map/index.js"
const App =()=>{
   return (
    <div className="App">
     <Map/>
     <List/>
     <Images/>
    </div>
  );
}

const List=()=>{
  return (
    <ul className="Listname">
      <li>List 01</li>
      <li>List 02</li>
      <li>List 03</li>
      <li>List 04</li>
    </ul>
  )
}

const Images=()=>{
  return(
    <div>
      <p>
        Lorem ipsum dolar sit amet?
      </p>
      <button>Send</button>
    </div>

  )
}

export default App;
