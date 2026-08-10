const {getAllquestion,createQuestion,updateQuestion, deleteQuestion}=require("../models/questionModel");
 
async function getQuestion(req,res) {
    try{
        const ques=await getAllquestion();
        res.json(ques);

    }catch(error){
        console.log(error);
        res.status(500).json({error:"failed to fetch questions"});
    }
}


async function addQuestion(req,res){
    
   try{
    const{question,option1,option2,option3,option4,correct_answer}=req.body;
    const add=await createQuestion(question,option1,option2,option3,option4,correct_answer);
    res.status(201).json(add);
   }catch(e){
    res.status(500).json({e:"cannot add question"});
   }
}
async function updateQ(req,res) {
     try{
     const{question,option1,option2,option3,option4,correct_answer}=req.body;
    const {id}=req.params;
    const up=await updateQuestion(id,question,option1,option2,option3,option4,correct_answer);
    res.json(up);
   }catch(e){
    res.status(500).json({e:"cannot update question"});
   }
}
async function deleteQ(req,res) {

      try{
        const {id}=req.params;
        const del=await deleteQuestion(id);
        if(!del){
            return res.status(404).json({error:"question not found"})
        }
        res.json(del);
      }
      catch(e){
    res.status(500).json({e:"cannot delete question"});
   }
}

module.exports={getQuestion,addQuestion,updateQ,deleteQ};