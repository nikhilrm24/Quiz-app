 const questions = [
    {
      question: "What is the first Marvel movie?",
      options: ["hulk", "iron man", "cap", "thor"],
      crctAns: "hulk",
    },
    {
      question: "Who is 1st avenger?",
      options: ["hulk", "iron man", "cap", "thor"],
      crctAns: "cap",
    },
    {
      question: "What's Hulk's name?",
      options: ["clint", "tony", "banner", "odinson"],
      crctAns: "banner",
    },
  ];

const cors=require("cors");


const express=require("express");
const app=express();
app.use(cors());

app.get("/api/question",(req,res)=>{
    res.json(questions);
})

app.listen(3000,()=>{
    console.log("server lsitening on 3000");
})