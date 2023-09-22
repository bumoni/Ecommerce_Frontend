import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const nevigator=useNavigate();
    const handleSubmit= async ()=>{
        let result= await fetch("http://localhost:5000/register",{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-type':'application/json'
            }
        })
        result= await result.json();
        if(result){
           localStorage.setItem("user",JSON.stringify(result))
           nevigator("/");
        }
    }
    return(
        <div style={{display:"block",alignItems:"center",width:"50%", marginLeft:"300px",width:"400px"}} >
             <h2>Register</h2>
            <input className="Input_type" value={name} onChange={(e)=>setName(e.target.value)} type="text" width={"100px"} placeholder="Name"/>
            <input   className="Input_type"  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" width={"100px"} placeholder="Email"/>
            <input  className="Input_type"  value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  width={"100px"} placeholder="Password"/>
            <button style={{
                backgroundColor:"lightblue",
                width:"100px",
                padding: "10px",
                marginLeft:"5px"
            }} 
            onClick={handleSubmit}
            type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;