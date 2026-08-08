const pool=require("../db");

const getAllquestion=async()=>{
    try {
    const result = await pool.query("SELECT * FROM questions");

    return result.rows;
  } catch (error) {
      throw error; 
  };
}

async function createQuestion(getQuestion,option1,option2,option3,option4,correct_answer){
    try{
        const result=await pool.query(`INSERT INTO questions (question,option1,option2,option3,option4,correct_answer)
              values($1,$2,$3,$4,$5,$6)`,[getQuestion,option1,option2,option3,option4,correct_answer]);
              return result.rows;
    }catch(e){
        throw e;
    };
}

module.exports={getAllquestion,createQuestion};