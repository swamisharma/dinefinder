import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Restaurant from './components/Restaurant';

export default function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(user.displayName);
        setEmail(user.email);
      } else{ 
      setUserName("");
        setEmail("");
    }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} email={email}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:city/:id" element={<Restaurant name={userName} email={email}/>} />
        </Routes>
      </Router>
    </div>
  );
}