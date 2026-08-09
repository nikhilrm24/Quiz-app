import { useEffect, useState } from "react";
import "./QuestionCard.css";

function QuestionCard() {
  const [questions, setQuestions] = useState([]);
  const [currQuestion, setcurrQuestion] = useState(0);
  const [selectOption, setselectOption] = useState(null);
  const [isCrct, setisCrct] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const[error,setError]=useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/questions")
      .then((response) => {
        if(!response.ok){
          
           throw new Error("failedto fetch questions");
        }
        
        return response.json()})
      .then((data) => setQuestions(data))
      .catch((error)=>{
        setError(error.message);
      })
  }, []);
  
  if(error){
    return <p>{error}</p>
  }

  if (questions.length === 0) {
    return <p>Loading...</p>;
    
  }

  const current = questions[currQuestion];

  const options = [
    current.option1,
    current.option2,
    current.option3,
    current.option4,
  ];

  function changeQuestion() {
    if (currQuestion < questions.length - 1) {
      setcurrQuestion(currQuestion + 1);
      setselectOption(null);
      setisCrct("");
    } else {
      setShowResult(true);
    }
  }

  function checkAns(index) {
    if (options[index] === current.correct_answer) {
      setisCrct("correct answer");
      setScore((prev) => prev + 1);
    } else {
      setisCrct("wrong answer");
    }

    setTimeout(() => {
      changeQuestion();
    }, 2000);
  }

  function selectIndex(index) {
    setselectOption(index);
  }

  function restartQuiz() {
    setcurrQuestion(0);
    setselectOption(null);
    setisCrct("");
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div className="res">
        <div className="res-temp">
          <h1>Quiz Completed 🎉</h1>

          <p>
            Your Score: {score}/{questions.length}
          </p>

          <button onClick={restartQuiz}>Restart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <h1>Quiz App</h1>

      <p>{current.question}</p>

      <div className="btn">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              selectIndex(index);
              checkAns(index);
            }}
            className={
              index === selectOption
                ? isCrct === "correct answer"
                  ? "crct"
                  : "wrong"
                : ""
            }
          >
            {option}
          </button>
        ))}
      </div>

      <p>{isCrct}</p>
    </div>
  );
}

export default QuestionCard;