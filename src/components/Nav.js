import React from 'react'
import {BrowserRouter,Routes,Route,  Link,useNavigate} from "react-router-dom"
const Nav=()=>{
    const auth=localStorage.getItem("user");
    const navigator=useNavigate();
    return(
        <div>
            <ul className='nav-ul'>
                <li>
                <Link to="/">Products</Link>
                </li>
                <li>
                <Link to="/add">Add Product</Link>
                </li>
                <li>
                <Link to="/update">Update Product</Link>
                </li>
                <li>
                <Link to="/profile">Profile</Link>
                </li>
                <li>
                   {auth?<Link to="/signup" onClick={()=>{localStorage.clear()}}>Log Out</Link>:<Link to="/signup">Sign Up</Link>}
                </li>
                <li>
                {auth?<></>:<Link to="/Login">Login</Link>}
                </li>
            </ul>
       </div>
    )
}

export default Nav;