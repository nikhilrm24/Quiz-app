const express = require("express");
const router = express.Router();
const {getQuestion,addQuestion, updateQ,deleteQ}=require("../controllers/questionController")

router.get("/questions",getQuestion);
router.post("/questions",addQuestion);
router.put("/questions/:id",updateQ);
router.delete("/questions/:id",deleteQ);

module.exports = router;