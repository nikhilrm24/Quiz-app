const pool=require("../db");

const getAllquestion=async()=>{
    try {
    const result = await pool.query("SELECT * FROM questions");

    return result.rows;
  } catch (error) {
      throw error; 
  };
}

async function createQuestion(Question,option1,option2,option3,option4,correct_answer){
    try{
        const result=await pool.query(`INSERT INTO questions (question,option1,option2,option3,option4,correct_answer)
              values($1,$2,$3,$4,$5,$6)`,[Question,option1,option2,option3,option4,correct_answer]);
              return result.rows[0];
    }catch(e){
        throw e;
    };
}

async function updateQuestion(id,uestion,option1,option2,option3,option4,correct_answer) {
       try{
        const result=await pool.query(`update questions
        set question=$1,option1=$2,option2=$3,option3=$4,option4=$5,correct_answer=$6 
        where id=$7 returning*`,[uestion,option1,option2,option3,option4,correct_answer,id]);
        return result.rows[0];
       }catch(error){
        throw error;
       }
};

async function deleteQuestion(id) {
    try{
        const result=await pool.query(` delete from questions 
            where id=$1
            returning *`,[id]);
    }catch(er){
        throw er;
    }
    
}

module.exports={getAllquestion,createQuestion,updateQuestion,deleteQuestion};