import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function AdminLogin(){
    const navigate=useNavigate();

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
      const[error,setError]=useState("");

    function handleLogin(e){
        e.preventDefault();
        if(username==="admin"&&password==="1234"){
             localStorage.setItem("isAdmin","true");
            navigate("/admin");
        }else{
        setError("invalid username or password");
    }

    }

    return(
        <>
        <h1>Admin Login</h1>
        <form action="" onSubmit={handleLogin}>
            <input type="text"
             type="text" 
             placeholder="user name"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
             />

             <input type="text"
              name="" id=""
              placeholder="password"
              value={password}
              onChange={(e)=>
              setPassword(e.target.value)} />

              <button type="submit"></button>
        </form>
        <p>{error}</p>
        </>
    )
}
export default AdminLogin;