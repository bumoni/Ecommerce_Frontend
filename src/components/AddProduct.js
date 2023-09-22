import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";

const AddProduct=()=>{
    const [addProduct,setAddProduct]=React.useState({
        name:"",
        price:"",
        category:"",
        company:"",
    })

    const handleSubmit=async()=>{
        let userId=JSON.parse(localStorage.getItem("user"))._doc._id
        let res= await fetch("http://localhost:5000/add_product",{
            method:"post",
            body: JSON.stringify({...addProduct,"userId":userId}),
            headers:{
                "Content-type":"application/json"
            }
        })
        res=await res.json();
        if(res.status_code===200){
            alert(res.result);
        }
        else{
            alert(res.result);
        }

    }
    return(
        <div style={{
            display:"flex",
            flexDirection: "column",
            width:"300px",
            marginLeft: "300px"
        }}>
            <h1>Add Product</h1>
            <input type="text" value={addProduct.name} onChange={(e)=>setAddProduct({...addProduct,name:e.target.value})} style={{margin:"10px"}} placeholder="Name"/>
            <input type="text" value={addProduct.price} onChange={(e)=>setAddProduct({...addProduct,price:e.target.value})} style={{margin:"10px"}} placeholder="Price"/>
            <input type="text"  value={addProduct.category} onChange={(e)=>setAddProduct({...addProduct,category:e.target.value})} style={{margin:"10px"}} placeholder="Category"/>
            <input type="text" value={addProduct.company} onChange={(e)=>setAddProduct({...addProduct,company:e.target.value})} style={{margin:"10px"}} placeholder="Company"/>
            <button style={{
                backgroundColor:"lightblue",
                width:"100px",
                padding: "10px",
                marginLeft:"10px"
            }} 
            disabled={addProduct.name===""||addProduct.price===""||addProduct.category===""||addProduct.company===""}
            onClick={handleSubmit}
            type="button">Add Product</button>
        </div>
    )
}

export default AddProduct;