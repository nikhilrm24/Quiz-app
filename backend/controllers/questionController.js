const {getAllQuestion,createQuestion,updateQuestion, deleteQuestion}=require("../models/questionModel");
 
async function getQuestion(req,res) {
    try{
        const ques=await getAllQuestion();
        res.json(ques);

    }catch(error){
        res.status(500).json({error:"failed to fetch questions"});
    }
}

async function addQuestion(req,res){
   try{
    const{q,o1,o2,o3,o4,crct}=req.body;
    const add=await createQuestion(q,o1,o2,o3,o4,crct);
    res.status(201).json(add);
   }catch(e){
    res.status(500).json({e:"cannot add question"});
   }
}
async function updateQ(req,res) {
     try{
    const{q,o1,o2,o3,o4,crct}=req.body;
    const {id}=req.params;
    const up=await updateQuestion(id,q,o1,o2,o3,o4,crct);
    res.json(up);
   }catch(e){
    res.status(500).json({e:"cannot update question"});
   }
}
async function deleteQ(req,res) {
      try{
        const {id}=req.params;
        const del=await deleteQuestion(id);
        res.json(del);
      }
      catch(e){
    res.status(500).json({e:"cannot delete question"});
   }
}

module.exports={getQuestion,addQuestion,updateQ,deleteQ};