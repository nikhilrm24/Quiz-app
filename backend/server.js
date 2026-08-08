const pool=require("./db");
const cors=require("cors");

const express=require("express");
const app=express();
app.use(cors());


app.get("/api/questions", async(req,res)=>{
   try{
     const result=await pool.query("select * from questions");
    res.json(result.rows);
   }catch(error){
    res.status(500).json({error:"failed fecth questions"});
   }
})

app.listen(3000,()=>{
    console.log("server lsitening on 3000");
})