import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const nevigator=useNavigate();
    const handleSubmit= async ()=>{
        let result= await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
            }
        })
        result= await result.json();
        if(result.status_code===200){
           localStorage.setItem("user",JSON.stringify(result))
           nevigator("/");
        }
        else{
            alert(result.result)
        }
    }
    return(
        <div style={{display:"block",alignItems:"center",width:"50%", marginLeft:"300px",width:"400px"}} >
             <h2>Login Here</h2>
         
            <input   className="Input_type"  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" width={"100px"} placeholder="Email"/>
            <input  className="Input_type"  value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  width={"100px"} placeholder="Password"/>
            <button style={{
                backgroundColor:"lightblue",
                width:"100px",
                padding: "10px",
                marginLeft:"5px"
            }} 
            onClick={handleSubmit}
            type="button">Log In</button>
        </div>
    )
}

export default Login;