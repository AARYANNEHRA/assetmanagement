import { useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const loggedin =  window.localStorage.getItem("isLoggedin")
  const [user , setuser] = useState(null)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user || loggedin ? <Homepage /> : <Login setuser = {setuser}/>} />
          <Route path="/login" element={<Login setuser = {setuser}/>} />
          <Route path="/register" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
