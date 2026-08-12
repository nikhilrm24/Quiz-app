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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center
        p-6">
        <div className=" w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Admin Login</h1>
            <form action="" onSubmit={handleLogin}>
                <input type="text"
                type="text" 
                placeholder="user name"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400
                mb-4"
                />

                <input type="text"
                name="" id=""
                placeholder="password"
                value={password}
                onChange={(e)=>
                setPassword(e.target.value)} 
                className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400
                mb-4"/>

                <button type="submit" className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold
                hover:bg-blue-600 transition">log in</button>
            </form>
            <p>{error}</p>
        </div>
        </div>
    )
}
export default AdminLogin;