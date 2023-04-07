import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './component/Home';
import { CreatePost } from './component/CreatePost';
import { Login } from './component/Login';
import { Logout } from './component/Logout';
import { Navbar } from "./component/Navbar";
import { useState } from 'react';

function App() {
  const[isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createpost" element={<CreatePost/>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
