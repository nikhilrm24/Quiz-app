const questionRoutes = require("./routes/questionRoutes");
const cors=require("cors");
const express=require("express");
const app=express();


app.use(cors());
app.use(express.json());

app.use("/api",questionRoutes);

app.listen(3000,()=>{
    console.log("server lsitening on 3000");
})