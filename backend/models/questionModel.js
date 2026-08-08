const pool=require("../db");

const getAllquestion=async()=>{
    try {
    const result = await pool.query("SELECT * FROM questions");

    return result.rows;
  } catch (error) {
      throw error; 
  };
}

module.exports={getAllquestion};