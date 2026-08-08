const {getAllQuestion}=require("../models/questionModel");
 
async function getQuestion(req,res) {
    try{
        const ques=await getAllQuestion();
        res.json(ques);

    }catch(error){
        res.status(500).json({error:"failed to fetch questions"});
    }
}

module.exports={getQuestion};