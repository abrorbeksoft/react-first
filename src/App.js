// import logo from './logo.svg';
import './App.css';
import Navbar from './modules/navbar'
import './index'
import Co from './modules/content'

const App =()=>{
   return (
    <div >
      <div className="container">
        <Navbar/>
    
      <div className="row">
        <div className="col-md-3 bg-primary text-white">
            <ul className="d-flex flex-column">
                <li><a href="#">Pofile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
      <div className="col-md-9">
        <Co/>
        
      </div>
      </div>
      </div>
    </div>
  );
}



export default App;
