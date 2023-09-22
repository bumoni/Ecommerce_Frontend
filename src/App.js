
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route,  Link} from "react-router-dom";
import SignUp from "./components/SignUp";
import { useEffect } from 'react';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<h1>Product Page</h1>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update" element={<h1>Update Product Page</h1>}/>
          <Route path="/logout" element={<h1>LogOut Page</h1>}/>
          <Route path="/profile" element={<h1>Profile Page</h1>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
