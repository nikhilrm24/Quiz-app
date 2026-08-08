const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get("/questions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM questions");

    res.json(result.rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch questions",
    });
  }
});

module.exports = router;